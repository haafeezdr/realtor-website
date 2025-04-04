import PropertyCard from "@/components/PropertyCard";


const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: "$5,200,000",
    location: "Beverly Hills, CA",
    image: "/property1.jpg",
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    price: "$1,750,000",
    location: "New York, NY",
    image: "/property2.jpg",
  },
  {
    id: 3,
    title: "Beachfront Mansion in Miami",
    price: "$8,900,000",
    location: "Miami, FL",
    image: "/property3.jpg",
  },
];

export default function PropertiesPage() {
  return (
    <section className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center">Available Properties</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore our latest listings and find your dream home.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
