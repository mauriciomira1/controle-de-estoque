import { Link, Outlet } from "react-router-dom"; // Importa os componentes Link e Outlet da biblioteca react-router-dom para criar links de navegação e renderizar o conteúdo da rota atual
import Header from "../components/Header"; // Importa o componente Header, que provavelmente é o cabeçalho da aplicação

const RootLayout = () => {
  // Componente RootLayout, que é responsável por definir o layout base da aplicação
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <main className="w-full flex flex-col items-center">
        <Outlet />
        {/* O componente Outlet renderiza o conteúdo da rota atual */}
      </main>
      <footer className="flex justify-center pt-10 pb-4">
        <span>
          Criado por{" "}
          <Link
            to="https://www.instagram.com/mauriciomira1/"
            target="_blank" // Abre o link em uma nova aba
            rel="noopener noreferrer" // Define política de segurança para links externos
          >
            Maurício Miranda
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default RootLayout;
