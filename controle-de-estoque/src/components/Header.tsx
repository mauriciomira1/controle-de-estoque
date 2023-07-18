import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between bg-purple-500">
      <span className="text-2xl">Controle de Estoque</span>
      <nav>
        <ul>
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
