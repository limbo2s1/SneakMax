import busket from "../../icons/Vector.svg";
import { useState } from "react";
import ModalBasket from "../ModalBasket/modalBasket";
import { useSelector } from "react-redux";
import { basketSelector } from "../../redux/slices/basket/basketSlice";
import "../Header/Header.scss";

const navItems = [
  { href: "#catalog", text: "Каталог" },
  { href: "#about", text: "О нас" },
  { href: "#choose", text: "Подбор товара" },
  { href: "#team", text: "Наша команда" },
  { href: "#questions", text: "Доставка и оплата" },
  { href: "#contacts", text: "Контакты" },
];

export default function Header() {
  const [isShow, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const basket = useSelector(basketSelector);
  const basketCount = basket.products.length;

  const handleBasketClick = () => {
    setShow((prev) => !prev);
    setIsOpen(false);
  };

  const handleNavItemClick = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <p className="logo">SneakMax</p>
          <ul className={isOpen ? "nav-list nav-open" : "nav-list"}>
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a href={item.href} onClick={handleNavItemClick}>
                  {item.text}
                </a>
              </li>
            ))}
            <li className="nav-item">
              <button className="btn-header" onClick={handleBasketClick}>
                Корзина <img src={busket} alt="корзина" />
                <span>{basketCount}</span>
              </button>
            </li>
          </ul>
          <button
            className={isOpen ? "lines lines-open" : "lines"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
      {isShow && <ModalBasket onClose={() => setShow(false)} />}
    </header>
  );
}
