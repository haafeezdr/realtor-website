import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  title: string;
  price: string;
  location: string;
  image: string;
}

const PropertyCard = ({ property }: { property: Property }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image src={property.image} alt={property.title} width={400} height={250} className="w-full h-56 object-cover" />
  
        <div className="p-4">
          <h2 className="text-xl font-bold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-lg font-semibold text-blue-500 mt-2">{property.price}</p>
  
          <Button asChild className="mt-4 w-full bg-blue-500 hover:bg-blue-600 transition">
            <a href="#">View Details</a>
          </Button>
        </div>
      </div>
  )
}

export default PropertyCard