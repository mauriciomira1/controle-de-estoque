/* import productsData from "../../../db.json"; */
import { SetStateAction, useState } from "react";
import axios from "axios";
import ItemsTable from "../../components/ItemsTable";

const ItemsList = () => {
  return (
    // Tabela para exibir a lista de produtos
    <ItemsTable />
  );
};

export default ItemsList;
