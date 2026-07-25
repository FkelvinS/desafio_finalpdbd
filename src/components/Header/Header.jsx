import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Header.css";

function Header() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
  (total, item) => total + item.quantity,
  0
);

  return (
    <header className="header">
      <div className="logo">
        <h1>Catálogo de Produtos</h1>
      </div>

      <nav>
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">Produtos</Link>
          </li>

          <li>
            <Link to="/cart">Carrinho ({totalItems})</Link>
          </li>
          
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;