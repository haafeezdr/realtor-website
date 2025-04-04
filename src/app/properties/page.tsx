// app/properties/page.tsx

import { Client, Databases, Query } from "appwrite";
import React from "react";

// Define Property Type
type Property = {
  $id: string;
  title: string;
  description: string;
  price: number;
  imageUrl?: string;
};

// Function to Fetch Properties at Build Time (Server Component)
async function fetchProperties(): Promise<Property[]> {
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Update if self-hosted
    .setProject("67ef29450012c633b10f"); // Replace with your actual project ID

  const databases = new Databases(client);

  try {
    const response = await databases.listDocuments(
      "YOUR_DATABASE_ID",
      "YOUR_COLLECTION_ID",
      [Query.limit(20)]
    );

    return response.documents.map((document) => ({
      $id: document.$id,
      title: document.title, 
      description: document.description, 
      price: document.price, 
      imageUrl: document.imageUrl,
    })) as Property[];

  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

// **Server Component**: No need for `getStaticProps`
export default async function PropertiesPage() {
  const properties = await fetchProperties();

  return (
    <div className="container mx-auto px-4 py-10">
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
                <img
                  src={property.imageUrl}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{property.description}</p>
                <p className="text-lg font-bold text-blue-600">${property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
