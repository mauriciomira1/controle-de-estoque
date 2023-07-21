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

  // Função para converter a string em um objeto Date
  function converterStringParaData(dataStr: string): Date {
    const partesData: number[] = dataStr
      .split("/")
      .map((parte) => parseInt(parte, 10));
    return new Date(partesData[2], partesData[1] - 1, partesData[0]);
  }

  items.map((item) => {
    const dataAtual: Date = new Date();
    const dataComparar: Date = converterStringParaData(item.dataDeCadastro);
    const subtracaoEmMilisegundos: number =
      dataAtual.getTime() - dataComparar.getTime();
    const diferencaEmDias: number =
      subtracaoEmMilisegundos / (1000 * 60 * 60 * 24);
    if (diferencaEmDias < 10) listaItemsRecentes.push(item);
    quantidadeItemsRecentes = Number(listaItemsRecentes.length);
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
                  {listaItemsRecentes.map((item) => (
                    <tr className="pl-2 py-2 items-center flex" key={item.id}>
                      <td className="w-3/5 text-left">{item.name}</td>
                      <td className="w-2/5 text-center">
                        <button className="bg-blue-800 rounded px-3 py-1 hover:bg-blue-700 duration-150">
                          <Link
                            to={`http://localhost:5173/item-details/${item.id}`}
                            className="text-white hover:text-white"
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
            <div className="flex flex-col items-center gap-4">
              <div className="flex justify-center gap-4 w-full">
                <DashboardWindow
                  title="Itens recentes"
                  quantity={quantidadeItemsRecentes}
                />
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
                    <tr className="pl-2 py-2 flex items-center" key={item.id}>
                      <td className="w-2/4 text-left">{item.name}</td>
                      <td className="w-1/4 text-center">{item.quantity}</td>
                      <td className="w-1/4 text-center">
                        <button className="bg-blue-800 rounded px-3 py-1 hover:bg-blue-700 duration-150">
                          <Link
                            to={`http://localhost:5173/item-details/${item.id}`}
                            className="text-white hover:text-white"
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
