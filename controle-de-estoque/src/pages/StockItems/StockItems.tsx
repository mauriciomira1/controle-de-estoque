import FormNewItem from "../../components/FormNewItem";
import useStock from "../../hooks/useStock";
import ItemsList from "../ItemsList/ItemsList"; // Importa o componente ItemsList que representa a lista de itens em estoque
import { useEffect, useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente

const StockItems = () => {
  // Componente StockItems, responsável por exibir a página de itens em estoque
  const [activeClass, setActiveClass] = useState("list"); // Estado para controlar a classe ativa do menu de navegação

  const { handleUpdate } = useStock();
  console.log(handleUpdate());
  let stateUpdate = handleUpdate();

  if (stateUpdate == "new") {
    setActiveClass("new");
  }

  useEffect(() => {
    console.log(stateUpdate);
  }, [stateUpdate]);

  console.log(activeClass);

  return (
    <section className="flex flex-col w-full p-6">
      <h1 className="text-5xl mb-10">Stock Items</h1>
      {/* Navegação com opções para listar todos os itens e criar um novo item */}

      <nav>
        <ul className={`w-full border-gray-400 border-b-2 flex gap-10 `}>
          <li
            className={`hover:cursor-pointer duration-100 border-gray-100 h-10 px-6 ${
              activeClass === "list" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveClass("list")}
          >
            Todos os itens
          </li>
          <li
            className={`hover:cursor-pointer duration-100 border-gray-100 h-10 px-6 ${
              activeClass === "new" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveClass("new")}
          >
            Novo item
          </li>
        </ul>
      </nav>
      {/* Renderiza o componente ItemsList ou NewItem com base na classe ativa */}
      {activeClass === "list" ? <ItemsList /> : <FormNewItem />}
    </section>
  );
};

export default StockItems;
