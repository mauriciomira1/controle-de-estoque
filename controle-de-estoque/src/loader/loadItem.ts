/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from "axios";

interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
}

const loadItem = async ({ params }: any) => {
  const response = await axios.get("http://localhost:3000/products/");
  const products = response.data;

  const product: ProductProps = products.find(
    (p: ProductProps) => p.id === +params.productId
  );
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export default loadItem;
