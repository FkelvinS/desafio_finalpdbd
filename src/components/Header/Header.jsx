import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Catálogo de Produtos</h1>
      </div>

      <nav>
        <ul className="menu">
          <li>Home</li>
          <li>Produtos</li>
          <li>Carrinho</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;