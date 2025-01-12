import ProductUI from "@/components/ProductUI";
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

export default async function Home() {
  const products: typeOfProducts[] = await client.fetch(`
    *[_type == 'product']{
      _id,
      name,
      description,
      price, 
      discountPercentage,
      tags,
      image
    }`
  );

  console.log(products);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Ecommerce Store</h1>
      <ProductUI />
    </div>
  );
}