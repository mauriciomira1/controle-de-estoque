import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

interface itemProps {
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
  items?: itemProps[];
  newItem?: (item: itemProps) => void;
  getItem?: (itemId: number) => void;
}

const useStock = (): StockHook => {
  return useContext(StockContext);
};

export default useStock;
