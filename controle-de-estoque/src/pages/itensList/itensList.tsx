const ItemsList = () => {
  return (
    <div className="flex flex-col w-full p-6">
      <h1>Stock Items</h1>
      <nav>
        <ul className="w-full border-b-2 border-gray-400 flex gap-10">
          <li className="border-b-2 border-gray-100 h-10 px-6">
            Todos os items
          </li>
          <li>Novo item</li>
        </ul>
      </nav>
      <table>
        <tr className="bg-gray-950 px-10 py-1">
          <th>ID</th>
          <th>Nome</th>
          <th>Em estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </table>
    </div>
  );
};

export default ItemsList;
