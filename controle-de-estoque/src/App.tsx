import { RouterProvider } from "react-router-dom"; // Importa o componente RouterProvider da biblioteca react-router-dom, usado para fornecer o roteador à aplicação
import router from "./router"; // Importa o objeto "router" que contém as configurações das rotas da aplicação
import { StockContextProvider } from "./contexts/StockContext";

function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  );
}

export default App;
