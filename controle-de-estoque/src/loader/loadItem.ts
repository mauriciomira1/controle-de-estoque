/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import products from "../db.json";

/* interface Product {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
} */

/* : Promise<DataFunctionValue> | DataFunctionValue */

/* const products: Product[] = productsData; */

const loadItem = ({ params }: any) => {
  const product = products.find((p) => p.id === +params.productId);
  if (!product) {
    throw new Error("Product not found");
  }
  return product;
};

export default loadItem;
