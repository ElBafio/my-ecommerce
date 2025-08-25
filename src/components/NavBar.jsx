import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">MyShop</div>
      <nav className="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>
      <CartWidget />
    </header>
  );
}
