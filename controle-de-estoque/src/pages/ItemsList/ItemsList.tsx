import productsData from "../../../db.json"; // Importa os dados dos produtos de um arquivo JSON (db.json)
import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado do componente
import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import ItemsTable from "../../components/ItemsTable";

const ItemsList = () => {
  const [products, setProducts] = useState(productsData.products); // Estado que armazena os dados dos produtos a serem exibidos na lista

  const handleDelete = async (productId: number) => {
    // Função assíncrona para lidar com a exclusão de um item da lista pelo ID
    try {
      await axios.delete(`http://localhost:3000/products/${productId}`); // Faz uma requisição DELETE usando a biblioteca axios para remover o produto do servidor
    } catch (error) {
      console.error("Erro ao deletar item: ", error); // Exibe um erro no console caso ocorra um problema na requisição
    }
    setProducts((prevProducts) =>
      prevProducts.filter((item) => item.id !== productId)
    ); // Atualiza o estado para remover o produto da lista localmente, sem precisar fazer uma nova requisição para obter a lista atualizada do servidor
  };

  return (
    // Tabela para exibir a lista de produtos
    <ItemsTable />
  );
};

export default ItemsList;
