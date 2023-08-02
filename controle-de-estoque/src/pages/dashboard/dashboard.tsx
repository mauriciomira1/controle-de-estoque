import axios from "axios";
import DashboardWindow from "../../components/DashboardWindow";
import { ObjectHTMLAttributes, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useStock from "../../hooks/useStock";

interface itemsProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const { items } = useStock();
  const [dataLoaded, setDataLoaded] = useState(false);
  const [listaItemsRecentes, setListaItemsRecentes] = useState<itemsProps[]>(
    []
  );
  const [listaItemsAcabando, setListaItemsAcabando] = useState<itemsProps[]>(
    []
  );
  const [quantidadeItemsRecentes, setQuantidadeItemsRecentes] = useState(0);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (items && items.length > 0) {
      // Cálculo de inventário total
      items.reduce((totalDeItems, item) => totalDeItems + item.quantity, 0);

      // Cálculo de itens recentes

      // Função para converter a string em um objeto Date
      const converterStringParaData = (dataStr: string): Date => {
        const partesData: number[] = dataStr
          .split("/")
          .map((parte) => parseInt(parte, 10));
        return new Date(partesData[2], partesData[1] - 1, partesData[0]);
      };

      items.map((item) => {
        const dataAtual: Date = new Date();
        const dataComparar: Date = converterStringParaData(item.createdAt);
        const subtracaoEmMilisegundos: number =
          dataAtual.getTime() - dataComparar.getTime();
        const diferencaEmDias: number =
          subtracaoEmMilisegundos / (1000 * 60 * 60 * 24);
        if (diferencaEmDias < 10) listaItemsRecentes.push(item);
        setQuantidadeItemsRecentes(Number(listaItemsRecentes.length));
      });

      // Cálculo de itens acabando (se quantidade < 10un)
      let meutotal = 0;
      items.map((item) => {
        if (item.quantity < 10) {
          listaItemsAcabando.push(item);

          meutotal++;
          setTotal(meutotal);
        }
      });
    }
    setListaItemsRecentes(listaItemsRecentes);
    setListaItemsAcabando(listaItemsAcabando);
    /*     setQuantidadeItemsRecentes(quantidadeItemsRecentes); */
    setDataLoaded(true);
    setTotal(total);
  }, [items, listaItemsAcabando, listaItemsRecentes, total]);

  if (!dataLoaded) {
    return <div>Carregando...</div>;
  }
  console.log(listaItemsRecentes);

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
                <DashboardWindow
                  title="Itens acabando (<10)"
                  quantity={total}
                />
              </div>
              <table className="w-full flex flex-col justify-center">
                <tbody>
                  <tr className="bg-gray-900 items-center flex pl-2 py-2 rounded font-semibold">
                    <th className="w-2/4 text-left">Itens acabando </th>
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
