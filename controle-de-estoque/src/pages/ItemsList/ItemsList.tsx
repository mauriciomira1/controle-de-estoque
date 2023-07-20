import { Link } from "react-router-dom";
import productsData from "../../../db.json";
import { useState } from "react";

interface Products {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
}

const ItemsList = () => {
  const [products, setProducts] = useState<Products[]>(productsData.products);

  const handleDelete = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId)
    );
  };

  return (
    <table className="my-8 flex flex-col justify-center items-center w-full">
      <tr className="bg-gray-950 px-4 py-5 my-3 rounded w-full flex">
        <th className="w-2/12 text-left">ID</th>
        <th className="w-4/12 text-left">Nome</th>
        <th className="w-2/12 text-left">Em estoque</th>
        <th className="w-2/12 text-left">Categoria</th>
        <th className="w-2/12 text-left">Ações</th>
      </tr>
      {products.map((product) => (
        <tr className="w-full my-3 flex px-4 items-center" key={product.id}>
          <td className="w-2/12 text-left">{product.id}</td>
          <td className="w-4/12 text-left">{product.name}</td>
          <td className="w-2/12 text-left">{product.quantity}</td>
          <td className="w-2/12 text-left">{product.category}</td>
          <td className="w-2/12 text-left flex gap-3">
            <Link
              to={`/item-details/${product.id}`}
              className="px-2 py-1 rounded text-gray-950 font-semibold bg-blue-600 hover:bg-blue-500 hover:text-gray-950 duration-150"
            >
              Ver
            </Link>
            <button className="px-2 py-1 rounded text-gray-950 font-semibold bg-gray-100 hover:opacity-90 duration-150">
              Atualizar
            </button>
            <button
              className="px-2 py-1 rounded text-gray-950 font-semibold bg-red-600 hover:opacity-90 duration-150"
              onClick={() => handleDelete(product.id)}
            >
              Excluir
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ItemsList;
