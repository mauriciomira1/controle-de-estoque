import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
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
    </>
  );
};

export default RootLayout;
