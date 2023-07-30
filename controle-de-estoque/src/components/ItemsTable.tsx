/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Link } from "react-router-dom";
import useStock from "../hooks/useStock";
import DeleteButton from "./DeleteButton";

interface ItemProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const ItemsTable = () => {
  const { items } = useStock();

  return (
    <table className="flex flex-col justify-center items-center w-full">
      <tbody className="my-8 justify-center items-center w-full">
        <tr className="bg-gray-950 px-4 py-5 my-3 rounded w-full flex">
          <th className="w-2/12 text-left">ID</th>
          <th className="w-4/12 text-left">Nome</th>
          <th className="w-2/12 text-left">Em estoque</th>
          <th className="w-2/12 text-left">Categoria</th>
          <th className="w-2/12 text-left">Ações</th>
        </tr>
        {items &&
          items.map((item: ItemProps) => (
            // Mapeia cada produto da lista para criar uma linha na tabela
            <tr className="w-full my-3 flex px-4 items-center" key={item.id}>
              <td className="w-2/12 text-left">{item.id}</td>
              <td className="w-4/12 text-left">{item.name}</td>
              <td className="w-2/12 text-left">{item.quantity}</td>
              <td className="w-2/12 text-left">{item.category}</td>
              <td className="w-2/12 text-left flex gap-3">
                <Link
                  to={`/item-details/${item.id}`}
                  className="px-2 py-1 rounded text-gray-950 font-semibold bg-blue-600 hover:bg-blue-500 hover:text-gray-950 duration-150"
                >
                  Ver
                </Link>
                <button className="px-2 py-1 rounded text-gray-950 font-semibold bg-gray-100 hover:opacity-90 duration-150">
                  Atualizar
                </button>
                <DeleteButton itemName={item.name} itemId={item.id} />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default ItemsTable;
