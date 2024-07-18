import "../Footer/Footer.scss";

const navItems = [
  { id: "catalog", text: "Каталог" },
  { id: "about", text: "О нас" },
  { id: "products", text: "Подбор товара" },
  { id: "team", text: "Наша команда" },
  { id: "delivery", text: "Доставка и оплата" },
  { id: "contacts", text: "Контакты" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <p className="footer-logo">SneakMax</p>
        <nav className="footer-nav">
          <ul className="footer-nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
