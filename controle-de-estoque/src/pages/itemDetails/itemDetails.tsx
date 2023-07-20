import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import productsData from "../../db.json";

interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
}

const ItemDetails = () => {
  const product = useLoaderData() as ProductProps;
  const [products, setProducts] = useState<ProductProps[]>(productsData);

  const handleDelete = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== product.id)
    );
  };

  return (
    <section>
      <div className="flex gap-4 items-center my-4">
        <h1 className="text-3xl mr-6  ">{product.name}</h1>
        <button className="w-24 py-2 rounded text-gray-950 font-semibold bg-gray-100 hover:opacity-80 duration-150">
          Atualizar
        </button>
        <button
          className="w-24 py-2 rounded text-gray-950 font-semibold bg-red-600 hover:opacity-80 duration-150"
          onClick={() => handleDelete()}
        >
          Excluir
        </button>
      </div>
      <div className="flex gap-6 my-8">
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Categoria: {product.category}</span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">
            Quantidade em estoque: {product.quantity}
          </span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Preço: R$ {product.price}</span>
        </div>
      </div>
      <p className="text-xl font-light">{product.description}</p>
      <p className="text-gray-400 text-sm italic">Cadastrado em: 12/02/2023</p>
      <p className="text-gray-400 text-sm italic">Atualizado em: 12/02/2023</p>
    </section>
  );
};

export default ItemDetails;
