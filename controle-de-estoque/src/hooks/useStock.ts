import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

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

interface StockHook {
  deleteItem?: (itemId: number) => void;
  items?: itemsProps[];
  newItem?: (itemId: number) => void;
}

const useStock = (): StockHook => {
  return useContext(StockContext);
};

export default useStock;
