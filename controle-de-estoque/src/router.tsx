import { createBrowserRouter } from "react-router-dom"; // Importa a função createBrowserRouter da biblioteca react-router-dom para criar o roteador da aplicação
import RootLayout from "./pages/RootLayout"; // Importa o componente RootLayout, que define o layout base da aplicação
import Dashboard from "./pages/dashboard/dashboard";
import ItemDetails from "./pages/itemDetails/itemDetails";
import NewItem from "./pages/newItem/newItem";
import UpdateItem from "./pages/updateItem/updateItem";
import StockItems from "./pages/StockItems/StockItems";
import loadItem from "./loader/loadItem"; // Importa a função loadItem, que é usada para carregar os detalhes do item
import ItemBoundary from "./errors/ItemBoundary"; // Importa o componente ItemBoundary, que é usado para exibir uma mensagem de erro caso ocorra algum problema ao carregar os detalhes do item

const router = createBrowserRouter([
  {
    path: "/", // Rota raiz
    element: <RootLayout />, // Componente a ser renderizado para a rota raiz, o RootLayout que define o layout base da aplicação
    children: [
      // Rotas aninhadas dentro da rota raiz
      {
        index: true, // Rota que corresponde ao índice da rota raiz, neste caso, a página principal da aplicação
        element: <Dashboard />,
      },
      {
        path: "stock-items", // Rota para a página de estoque de itens
        element: <StockItems />,
      },
      {
        path: "item-details/:productId", // Rota para a página de detalhes do item, com parâmetro de rota "productId"
        element: <ItemDetails />,
        loader: loadItem, // Função de carregamento a ser usada para carregar os detalhes do item
        errorElement: <ItemBoundary />, // Componente ItemBoundary a ser renderizado caso ocorra um erro ao carregar os detalhes do item
      },
      {
        path: "new-item", // Rota para a página de criação de um novo item
        element: <NewItem />,
      },
      {
        path: ":productId/update-item", // Rota para a página de atualização de um item existente
        element: <UpdateItem />,
      },
    ],
  },
]);

export default router;
