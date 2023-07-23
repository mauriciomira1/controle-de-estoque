import axios from "axios"; // Importa a biblioteca axios para fazer requisições HTTP
import { useLoaderData } from "react-router-dom"; // Importa o hook useLoaderData da biblioteca react-router-dom, usado para acessar os dados carregados por uma rota

// Interface que define o formato dos dados do produto
interface ProductProps {
  id: number;
  name: string;
  quantity: number;
  category: string;
  price: number;
  description: string;
  dataDeCadastro: string;
}

const ItemDetails: React.FC = () => {
  // Componente ItemDetails, responsável por exibir os detalhes de um produto específico
  const product = useLoaderData() as ProductProps; // Obtém os dados do produto carregados pela rota usando o hook useLoaderData

  // Função responsável por deletar o item quando o botão "Excluir" é clicado
  const handleDelete = async () => {
    try {
      // Faz uma requisição DELETE para a API para deletar o item com o ID específico
      await axios.delete(`http://localhost:3000/products/${product.id}`);
      // Redireciona o usuário para a página de itens em estoque após a exclusão
      window.location.href = "http://localhost:5173/stock-items";
    } catch (error) {
      console.error("Erro ao deletar item: ", error); // Em caso de erro, exibe a mensagem de erro no console
    }
  };

  return (
    <section>
      {/* Seção que exibe os detalhes do produto */}
      <div className="flex gap-4 items-center my-4">
        <h1 className="text-3xl mr-6  ">{product.name}</h1>
        {/* Botão para atualizar o produto (a ser implementado) */}
        <button className="w-24 py-2 rounded text-gray-950 font-semibold bg-gray-100 hover:opacity-80 duration-150">
          Atualizar
        </button>
        {/* Botão para excluir o produto */}
        <button
          className="w-24 py-2 rounded text-gray-950 font-semibold bg-red-600 hover:opacity-80 duration-150"
          onClick={void handleDelete} // Chama a função handleDelete ao clicar no botão "Excluir"
        >
          Excluir
        </button>
      </div>
      <div className="flex gap-6 my-8">
        {/* Exibe informações como categoria, quantidade em estoque e preço do produto */}
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Categoria: {product.category}</span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">
            Quantidade em estoque: {product.quantity}
          </span>
        </div>
        <div className="h-16 px-8 rounded flex items-center justify-center bg-gray-950">
          <span className="text-xl">Preço: R$ {product.price}</span>
        </div>
      </div>
      {/* Exibe a descrição do produto */}
      <p className="text-xl font-light">{product.description}</p>
      {/* Exibe as datas de cadastro e atualização do produto */}
      <p className="text-gray-400 text-sm italic">
        Cadastrado em: {product.dataDeCadastro}
      </p>
      <p className="text-gray-400 text-sm italic">Atualizado em: 21/07/2023</p>
    </section>
  );
};

export default ItemDetails;
