import DashboardWindow from "../../components/DashboardWindow";

const Dashboard = () => {
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl mb-6">Dashboard</h1>
      <div className="flex gap-4">
        <DashboardWindow title="Diversidade de itens" quantity={2} />
        <DashboardWindow title="Inventário total" quantity={40} />
        <DashboardWindow title="Itens recentes" quantity={2} />
        <DashboardWindow title="Itens acabando" quantity={1} />
      </div>
      <div className="flex gap-4">
        <table className="w-[28rem]">
          <tr className="bg-gray-900 flex rounded font-semibold">
            <th className="w-[18rem] text-left">Itens recentes</th>
            <th className="">Ações</th>
          </tr>
          <tr>
            <td>Biscoito mabel</td>
            <td>
              <button>Ver</button>
            </td>
          </tr>
          <tr>
            <td>Wafer Bauducco</td>
            <td>
              <button>Ver</button>
            </td>
          </tr>
        </table>
        <table className="w-[28rem]">
          <tr className="bg-gray-900 flex rounded font-semibold">
            <th className="w-[10rem] text-left">Itens acabando</th>
            <th className="w-[7rem] text-left">Qtd</th>
            <th className="w-[8rem] text-left">Ações</th>
          </tr>
          <tr>
            <td>7 Batata Ruffles</td>
            <td>8</td>
            <button>Ver</button>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
