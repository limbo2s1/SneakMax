import { Sneaker } from "../../redux/slices/sneakers/sneakersSlice";
import { SneakerItem } from "./SneakerItem";

type SneakerListProps = {
  sneakers: Sneaker[];
  onViewDetails: (id: string) => void;
  onAddToBasket: (item: Sneaker) => void;
};

export function SneakerList({ sneakers, onViewDetails, onAddToBasket }: SneakerListProps) {
  return (
    <ul className="list-sneakers-container">
      {sneakers.map((item) => (
        <SneakerItem
          key={item.id}
          item={item}
          onViewDetails={onViewDetails}
          onAddToBasket={onAddToBasket}
        />
      ))}
    </ul>
  );
}
