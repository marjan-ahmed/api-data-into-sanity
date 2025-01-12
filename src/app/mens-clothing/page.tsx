import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type typeOfProducts = {
  _id: string;
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  tags: string[];
  image: any;
};

interface ProductUIProps {
  tag?: string;
}

async function MensClothing() {
  // Conditional query based on whether the `tag` prop is provided
  const query = `
    *[_type == 'product' && "men's clothing" in tags]{
      _id,
      name,
      description,
      price, 
      discountPercentage,
      tags,
      image
    }`;  // Added missing closing bracket here

  const product: typeOfProducts[] = await client.fetch(query);
  console.log('Fetched products:', product); // Log the products for debugging

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl text-center mt-8 mb-10 font-[poppins] font-normal capitalize">
        Men's Clothing
      </h2>
      <div className="flex justify-center flex-wrap gap-8">
        {product.map((product) => (
          <div
            key={product._id}
            className="bg-gray-50 w-[300px] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Image Section */}
            <div className="p-4 flex justify-center">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={150}
                height={150}
                className="rounded-md object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="p-4 flex flex-col flex-grow">
              <h1 className="text-xl font-bold">{product.name}</h1>
              <p className="text-gray-700 mt-2 flex-grow">
                {product.description.substring(0, 100).concat('...')}
              </p>
              <div className="flex justify-between mt-4">
                <p className="font-medium">${product.price}</p>
                <p className="text-sm text-gray-400 font-bold">
                  {product.tags.join(', ')}
                </p>
              </div>
            </div>

            {/* Add to Cart Button */}
            <div className="p-4">
              <button className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MensClothing;
