"use client";

import { Client, Databases, Storage, ID, Query } from "appwrite";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Appwrite Config
const PROJECT_ID = "67ef29450012c633b10f";
const DATABASE_ID = "67ef2ee1001690561271";
const COLLECTION_ID = "67efe6f4002b4ed5fd15";
const BUCKET_ID = "67efc1de0036f6f1cedf";

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);
const databases = new Databases(client);
const storage = new Storage(client);

type Property = {
  $id: string;
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
};

export default function ManagePropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [propertyData, setPropertyData] = useState({
    id: "",
    title: "",
    description: "",
    price: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch Properties
  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.limit(100)]);

        const mapped = await Promise.all(
          response.documents.map(async (document) => ({
            $id: document.$id,
            title: document.title,
            description: document.description,
            price: document.price,
            imageUrl: document.imageUrl
              ? storage.getFileView(BUCKET_ID, document.imageUrl)
              : undefined,
          }))
        );

        setProperties(mapped);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    fetchProperties();
  }, [router]);

  // File Handler
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  // Input Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let fileId = propertyData.id ? properties.find((p) => p.$id === propertyData.id)?.imageUrl : "";

      if (selectedFile) {
        const file = await storage.createFile(BUCKET_ID, ID.unique(), selectedFile);
        fileId = file.$id;
      }

      if (propertyData.id) {
        // Update
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, propertyData.id, {
          title: propertyData.title,
          description: propertyData.description,
          price: parseFloat(propertyData.price),
          imageUrl: fileId,
        });
        alert("Property updated!");
      } else {
        // Create
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
          title: propertyData.title,
          description: propertyData.description,
          price: propertyData.price,
          imageUrl: fileId,
        });
        alert("Property added!");
      }

      router.refresh();
    } catch (error) {
      console.error("Error saving property:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete Handler
  const handleDelete = async (propertyId: string, fileId?: string) => {
    if (!confirm("Are you sure you want to delete this property?")) return;
    setLoading(true);
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, propertyId);
      if (fileId) await storage.deleteFile(BUCKET_ID, fileId);
      alert("Property deleted!");
      router.refresh();
    } catch (error) {
      console.error("Error deleting property:", error);
    } finally {
      setLoading(false);
    }
  };

  // Edit Handler
  const handleEdit = (property: Property) => {
    setPropertyData({
      id: property.$id,
      title: property.title,
      description: property.description,
      price: property.price,
    });
  };

  return (
    <div className="w-full h-full bg-white p-6 shadow-md rounded-lg mt-20">
      <h2 className="text-2xl font-semibold mb-4">{propertyData.id ? "Edit Property" : "Upload a New Property"}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Title" value={propertyData.title} onChange={handleChange} className="w-full p-2 border rounded" required />
        <textarea name="description" placeholder="Description" value={propertyData.description} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="price" placeholder="Price" value={propertyData.price} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" onChange={handleFileChange} className="w-full p-2 border rounded" />
        <Button type="submit" disabled={loading}>{loading ? "Processing..." : propertyData.id ? "Update Property" : "Upload Property"}</Button>
      </form>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Manage Properties</h2>
      <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length === 0 ? (
          <p className="text-gray-500">No properties added yet.</p>
        ) : (
          // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          properties.map((property) => (
            <div key={property.$id} className="border  rounded-lg p-4 shadow-md">
              {property.imageUrl ? (
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  width={500}
                  height={300}
                  className="w-full h-60 mb-2"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <h3 className="text-xl font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">{property.description}</p>
              <p className="text-lg font-bold text-blue-600">N{property.price}</p>

              <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={() => handleEdit(property)}>Edit</Button>
                <Button variant="destructive" onClick={() => handleDelete(property.$id, property.imageUrl)}>Delete</Button>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
    </div>
  );
}
