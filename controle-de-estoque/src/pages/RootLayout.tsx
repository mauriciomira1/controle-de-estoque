import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <Header />
      <main className="w-full flex flex-col items-center">
        <Outlet />
      </main>
      <footer className="flex justify-center pt-10 pb-4">
        <span>
          Criado por{" "}
          <Link
            to="https://www.instagram.com/mauriciomira1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Maurício Miranda
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default RootLayout;
