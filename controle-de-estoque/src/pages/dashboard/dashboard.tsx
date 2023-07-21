/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import axios from "axios";
import DashboardWindow from "../../components/DashboardWindow";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
  dataDeCadastro: string;
}

const Dashboard = () => {
  const [items, setItems] = useState<ProductProps[]>([]);

  const getData = async () => {
    const response = await axios.get("http://localhost:3000/products");
    setItems(response.data);
  };

  useEffect(() => {
    void getData();
  }, []);

  // Cálculo de inventário total
  const quantidade = items.reduce(
    (totalDeItems, item) => totalDeItems + item.quantity,
    0
  );

  // Cálculo de itens recentes
  let quantidadeItemsRecentes = 0;
  const listaItemsRecentes: ProductProps[] = [];
  items.map((item) => {
    const dataAtual = new Date().toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const partesData = item.dataDeCadastro.split("/");
    const dataCadastrado = new Date(partesData[2]);

    if (dataAtual - item.dataAtual);
  });

  // Cálculo de itens acabando (se quantidade < 5un)
  let total = 0;
  const listaItemsAcabando: ProductProps[] = [];
  items.map((item) => {
    if (item.quantity < 5) {
      listaItemsAcabando.push(item);
      total++;
    }
  });

  return (
    <>
      {!items ? (
        ""
      ) : (
        <div className="flex items-center flex-col mb-10 w-full">
          <h1 className="text-4xl mb-6">Dashboard</h1>
          <div className="flex gap-4">
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-4 w-full">
                <DashboardWindow
                  title="Diversidade de itens"
                  quantity={items.length}
                />
                <DashboardWindow
                  title="Inventário total"
                  quantity={items.reduce(
                    (totalDeItems, item) => totalDeItems + item.quantity,
                    0
                  )}
                />
              </div>
              <table className="w-full flex flex-col justify-center">
                <tbody>
                  <tr className="bg-gray-900 flex pl-2 py-2 rounded font-semibold">
                    <th className="w-3/5 text-left">Itens recentes</th>
                    <th className="w-2/5">Ações</th>
                  </tr>
                  <tr className="pl-2 py-2 items-center flex">
                    <td className="w-3/5 text-left">Biscoito mabel</td>
                    <td className="w-2/5 text-center">
                      <button className="bg-blue-800 rounded px-3 py-1 hover:bg-blue-700 duration-150">
                        Ver
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-4 w-full">
                <DashboardWindow title="Itens recentes" quantity={2} />
                <DashboardWindow title="Itens acabando" quantity={total} />
              </div>
              <table className="w-full flex flex-col justify-center">
                <tbody>
                  <tr className="bg-gray-900 items-center flex pl-2 py-2 rounded font-semibold">
                    <th className="w-2/4 text-left">Itens acabando</th>
                    <th className="w-1/4">Qtd</th>
                    <th className="w-1/4">Ações</th>
                  </tr>
                  {listaItemsAcabando.map((item) => (
                    <tr className="pl-2 py-2 flex items-center">
                      <td className="w-2/4 text-left">{item.name}</td>
                      <td className="w-1/4 text-center">{item.quantity}</td>
                      <td className="w-1/4 text-center">
                        <button className="bg-blue-800 rounded px-3 py-1 hover:bg-blue-700 duration-150">
                          <Link
                            to={`http://localhost:5173/item-details/${item.id}`}
                            className="text-white"
                          >
                            Ver
                          </Link>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
