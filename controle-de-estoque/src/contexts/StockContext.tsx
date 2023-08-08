import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const StockContext = createContext({});

interface StockContextProviderProps {
  children: React.ReactNode;
}

interface ProductProps {
  id?: number; // ID opcional, pois pode ser gerado pelo servidor
  name: string; // O nome do produto
  quantity: number; // A quantidade em estoque o produto
  category: string; // A categoria do produto
  price: number; // O preço do produto
  description: string; // A descrição do produto
  createdAt?: string; // A data de criação do produto (será gerada pelo servidor)
  updatedAt?: string; // A data de atualização do produto (será atualizada pelo servidor)
}

export function StockContextProvider({ children }: StockContextProviderProps) {
  // Define o estado para armazenar os itens do estoque
  const [items, setItems] = useState<ProductProps[]>();

  // Função assíncrona que faz uma requisição GET para obter os dados do servidor
  const getData = async () => {
    const response = await axios.get<ProductProps[]>(
      "http://localhost:3000/products"
    );
    if (!response) return [];
    setItems(response.data);
  };

  // Executa a função getData apenas uma vez, quando o componente é montado
  useEffect(() => {
    void getData();
  }, []);

  // Função para adicionar um novo item ao estoque
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
        void getData(); // Atualiza os dados após a criação do novo produto
      } catch (error) {
        console.log("Criação de produto falhou!");
      }
    })();
  };

  const getItem = async (itemId: number) => {
    return await axios.get(`http://localhost:3000/products/${itemId}`);
  };

  // Atualiza os dados após a criação do novo produto
  const deleteItem = (itemId: number) => {
    void (async () => {
      try {
        await axios.delete(`http://localhost:3000/products/${itemId}`);
        void getData(); // Atualiza os dados após a exclusão do produto
      } catch (error) {
        console.log("Exclusão de produto falhou!");
      }
    })();
  };

  const handleUpdate = (state: string) => {
    return state;
  };

  // Cria um objeto 'stock' contendo os itens e as funções para adicionar e excluir itens do estoque
  const stock = {
    items,
    newItem,
    deleteItem,
    getItem,
    handleUpdate,
  };

  // Renderiza o contexto, passando o objeto 'stock' como valor, para envolver os elementos filhos
  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
