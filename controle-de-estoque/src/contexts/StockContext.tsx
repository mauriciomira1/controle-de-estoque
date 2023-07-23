import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const StockContext = createContext({});

interface StockContextProviderProps {
  children: React.ReactNode;
}

interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export function StockContextProvider({ children }: StockContextProviderProps) {
  const [items, setItems] = useState<ProductProps[]>();

  const getData = async () => {
    const response = await axios.get<ProductProps[]>(
      "http://localhost:3000/products"
    );
    setItems(response.data);
  };

  useEffect(() => {
    void getData();
  }, []);

  const newItem = (item: ProductProps) => {
    const dateFormated = new Date().toLocaleString("pt-BR", {
      // Formata a data atual no formato "dd/MM/yyyy"
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    item.createdAt = dateFormated;
    item.updatedAt = dateFormated;

    void (async () => {
      try {
        // Faz uma requisição POST usando a biblioteca axios para enviar o novo produto ao servidor
        await axios.post(
          "http://localhost:3000/products", // URL da API para adicionar produtos
          item // Dados do novo produto
        );
        console.log("Novo produto criado com sucesso!");
      } catch (error) {
        console.log("Criação de produto falhou!");
      }
    })();
  };

  const stock = {
    items,
    newItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
