import eye from "../../icons/eye.svg";
import basket from "../../icons/basket.svg";
import { Sneaker } from "../../redux/slices/sneakers/sneakersSlice";

type SneakerItemProps = {
  item: Sneaker;
  onViewDetails: (id: string) => void;
  onAddToBasket: (item: Sneaker) => void;
};

export function SneakerItem({ item, onViewDetails, onAddToBasket }: SneakerItemProps) {
  return (
    <li key={item.id} className="list-sneakers">
      <img src={item.imgUrl} alt={item.title} className="catalog-image" />
      <div className="overlay-buttons">
        <button className="overlay-button" onClick={() => onViewDetails(item.id.toString())}>
          <img className="inner-img-btn" src={eye} alt="View" />
        </button>
        <button className="overlay-button" onClick={() => onAddToBasket(item)}>
          <img className="inner-img-btn" src={basket} alt="Basket" />
        </button>
      </div>
      <p className="catalog-title">{item.title}</p>
      <p className="catalog-price">{item.price} р</p>
    </li>
  );
}
