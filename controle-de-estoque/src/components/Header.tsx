import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between m-6 w-full px-10">
      <span className="font-bold uppercase">Controle de Estoque</span>
      <nav>
        <ul className="flex gap-5">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/items-list">Items</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
