import { createBrowserRouter } from "react-router-dom"; // Importa a função createBrowserRouter da biblioteca react-router-dom para criar o roteador da aplicação
import RootLayout from "./pages/RootLayout"; // Importa o componente RootLayout, que define o layout base da aplicação
import Dashboard from "./pages/dashboard/dashboard"; // Importa o componente Dashboard, que representa a página principal da aplicação
import ItemDetails from "./pages/itemDetails/itemDetails"; // Importa o componente ItemDetails, que representa a página de detalhes do item
import NewItem from "./pages/newItem/newItem"; // Importa o componente NewItem, que representa a página para criar um novo item
import UpdateItem from "./pages/updateItem/updateItem"; // Importa o componente UpdateItem, que representa a página para atualizar um item existente
import StockItems from "./pages/StockItems/StockItems"; // Importa o componente StockItems, que representa a página de estoque de itens
import loadItem from "./loader/loadItem"; // Importa a função loadItem, que é usada para carregar os detalhes do item
import ItemBoundary from "./errors/ItemBoundary"; // Importa o componente ItemBoundary, que é usado para exibir uma mensagem de erro caso ocorra algum problema ao carregar os detalhes do item

const router = createBrowserRouter([
  // Define a estrutura de rotas da aplicação usando a função createBrowserRouter
  {
    path: "/", // Rota raiz
    element: <RootLayout />, // Componente a ser renderizado para a rota raiz, o RootLayout que define o layout base da aplicação
    children: [
      // Rotas aninhadas dentro da rota raiz
      {
        index: true, // Rota que corresponde ao índice da rota raiz, neste caso, a página principal da aplicação
        element: <Dashboard />, // Componente Dashboard a ser renderizado para a rota principal
      },
      {
        path: "stock-items", // Rota para a página de estoque de itens
        element: <StockItems />, // Componente StockItems a ser renderizado para a rota "stock-items"
      },
      {
        path: "item-details/:productId", // Rota para a página de detalhes do item, com parâmetro de rota "productId"
        element: <ItemDetails />, // Componente ItemDetails a ser renderizado para a rota "item-details/:productId"
        loader: loadItem, // Função de carregamento a ser usada para carregar os detalhes do item
        errorElement: <ItemBoundary />, // Componente ItemBoundary a ser renderizado caso ocorra um erro ao carregar os detalhes do item
      },
      {
        path: "new-item", // Rota para a página de criação de um novo item
        element: <NewItem />, // Componente NewItem a ser renderizado para a rota "new-item"
      },
      {
        path: "update-item", // Rota para a página de atualização de um item existente
        element: <UpdateItem />, // Componente UpdateItem a ser renderizado para a rota "update-item"
      },
    ],
  },
]);

export default router;
