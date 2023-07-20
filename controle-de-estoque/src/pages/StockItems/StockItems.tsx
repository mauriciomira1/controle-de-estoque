/* import ItemsList from "../../components/ItemsList"; */
import ItemsList from "../ItemsList/ItemsList";
import NewItem from "../NewItem/NewItem";
import { useState } from "react";

const StockItems = () => {
  const [activeClass, setActiveClass] = useState("list");

  return (
    <div className="flex flex-col w-full p-6">
      <h1>Nome do produto aqui</h1>
      <h1 className="text-5xl mb-10">Stock Items</h1>
      <nav>
        <ul className={`w-full border-gray-400 border-b-2 flex gap-10 `}>
          <li
            className={`hover:cursor-pointer duration-100 border-gray-100 h-10 px-6 ${
              activeClass === "list" ? "border-b-2" : ""
            }`}
            onClick={() => setActiveClass("list")}
          >
            Todos os items
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
      {activeClass === "list" ? <ItemsList /> : <NewItem />}
    </div>
  );
};

export default StockItems;
