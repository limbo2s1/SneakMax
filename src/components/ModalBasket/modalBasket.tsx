import { useSelector, useDispatch } from "react-redux";
import { basketSelector, removeProduct } from "../../redux/slices/basket/basketSlice";
import trash from "../../icons/trash.svg";
import "../ModalBasket/modalBasket.scss";
import { Link } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  description: string;
  imgUrl: string;
  price: string;
};

type BasketItem = {
  uuid: string;
  product: Product;
};

type BasketState = {
  products: BasketItem[];
};

type RootState = {
  basket: BasketState;
};

type ModalBasketProps = {
  onClose: () => void;
};

export default function ModalBasket({ onClose }: ModalBasketProps) {
  const basket = useSelector<RootState, BasketState>((state) => basketSelector(state));
  const dispatch = useDispatch();

  const totalAmount = basket.products.reduce(
    (total: number, item: BasketItem) => total + parseFloat(item.product.price),
    0
  );

  return (
    <div className="container">
      <div className="back" onClick={onClose}></div>
      <div className="modalBasket">
        <div className="basket-sneakers">
          {basket.products.length === 0 ? (
            <p className="basket-empty">Корзина пуста</p>
          ) : (
            basket.products.map((item: BasketItem) => (
              <div key={item.uuid} className="basket-product">
                <div className="basket-product-main">
                  <img className="basket-img" src={item.product.imgUrl} alt={item.product.title} />
                  <div className="basket-product-details">
                    <p className="basket-product-title">{item.product.title}</p>
                    <p className="basket-product-price">{item.product.price} руб.</p>
                  </div>
                </div>
                <img
                  src={trash}
                  onClick={() => dispatch(removeProduct(item.uuid))}
                  alt="Удалить"
                  className="basket-product-trash"
                />
              </div>
            ))
          )}
        </div>
        <div className="basket-under">
          <div className="basket-block-price">
            <p className="basket-itogo">Итого:</p>
            <p className="basket-price">{totalAmount} руб.</p>
          </div>
          <Link to="/basket" className="btn basket-btn" onClick={onClose}>
            Перейти в корзину
          </Link>
        </div>
      </div>
    </div>
  );
}
