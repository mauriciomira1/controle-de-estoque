import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

interface StockHook {
  deleteItem?: (itemId: number) => void;
}

const useStock = (): StockHook => {
  return useContext(StockContext);
};

export default useStock;
