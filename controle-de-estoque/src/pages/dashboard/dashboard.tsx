import DashboardWindow from "../../components/DashboardWindow";

const Dashboard = () => {
  return (
    <div className="flex items-center flex-col mb-10 w-full">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 w-full">
            <DashboardWindow title="Diversidade de itens" quantity={2} />
            <DashboardWindow title="Inventário total" quantity={40} />
          </div>
          <table className="w-full flex flex-col justify-center">
            <tr className="bg-gray-900 flex pl-2 py-2 rounded font-semibold">
              <th className="w-3/5 text-left">Itens recentes</th>
              <th className="w-2/5">Ações</th>
            </tr>
            <tr className="pl-2 py-2 items-center flex">
              <td className="w-3/5 text-left">Biscoito mabel</td>
              <td className="w-2/5 text-center">
                <button className="bg-gray-700 rounded px-3 py-1 hover:bg-gray-600 duration-150">
                  Ver
                </button>
              </td>
            </tr>
          </table>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 w-full">
            <DashboardWindow title="Itens recentes" quantity={2} />
            <DashboardWindow title="Itens acabando" quantity={1} />
          </div>
          <table className="w-full flex flex-col justify-center">
            <tr className="bg-gray-900 items-center flex pl-2 py-2 rounded font-semibold">
              <th className="w-2/4 text-left">Itens acabando</th>
              <th className="w-1/4">Qtd</th>
              <th className="w-1/4">Ações</th>
            </tr>
            <tr className="pl-2 py-2 flex items-center">
              <td className="w-2/4 text-left">7 Batata Ruffles</td>
              <td className="w-1/4 text-center">8</td>
              <td className="w-1/4 text-center">
                <button className="bg-gray-700 rounded px-3 py-1 hover:bg-gray-600 duration-150">
                  Ver
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
