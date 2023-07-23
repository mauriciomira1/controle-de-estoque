import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

const useStock = () => {
  return useContext(StockContext);
};

export default useStock;
