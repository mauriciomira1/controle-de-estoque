import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>Controle de Estoque</span>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/list-items">Items</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
