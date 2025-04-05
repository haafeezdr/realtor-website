'use client';

import { Client, Databases, Query, Storage } from "appwrite";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define Property Type
type Property = {
  $id: string;
  title: string;
  description: string;
  price: string;
  imageUrl?: string;
};

const PROJECT_ID = "67ef29450012c633b10f";
const DATABASE_ID = "67ef2ee1001690561271";
const COLLECTION_ID = "67efe6f4002b4ed5fd15";
const BUCKET_ID = "67efc1de0036f6f1cedf";
const ITEMS_PER_PAGE = 6;

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_ID);

const databases = new Databases(client);
const storage = new Storage(client);

export default function PropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
          Query.limit(ITEMS_PER_PAGE),
          Query.offset((page - 1) * ITEMS_PER_PAGE),
        ]);

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
        setTotalPages(Math.ceil(response.total / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    }

    fetchProperties();
  }, [page]);

  return (
    <div className="w-full h-full mt-20 p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Available Properties</h1>

      {properties.length === 0 ? (
        <p className="text-center text-gray-500">No properties available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.$id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              {property.imageUrl ? (
                <Image
                  src={property.imageUrl}
                  alt={property.title}
                  width={500}
                  height={400}
                  className="w-full h-96 "
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <div className="p-2">
                <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{property.description}</p>
                <p className="text-lg font-bold text-blue-600">N{property.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <span className="text-lg font-semibold">
          Page {page} of {totalPages}
        </span>
        <Button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
