import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import galochka from "../../icons/galochka.svg";
import star from "../../icons/Star.svg";
import "./details.scss";
import { useAppDispatch } from "../../redux/Store";
import { addProduct } from "../../redux/slices/basket/basketSlice";

type Sneaker = {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  price: number;
  oldPrice: number;
  inStock: number;
  vendorСode: string;
  stars: number;
  sizes: string[];
  gender: string;
  color: string;
  compound: string;
  country: string;
};

export default function SneakerDetails() {
  const { id } = useParams<{ id: string }>();
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchSneakerDetails = async () => {
      try {
        const { data } = await axios.get(`https://d0a241b6583b9f48.mokky.dev/sneakers/${id}`);
        setSneaker(data);
        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchSneakerDetails();
  }, [id]);

  const handleOverlayClick = (item: Sneaker) => {
    const product = {
      id: Number(item.id),
      title: item.title,
      description: item.description,
      imgUrl: item.imgUrl,
      price: item.price.toString(),
    };
    dispatch(addProduct(product));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading sneaker details.</div>;
  }

  if (!sneaker) {
    return <div>No sneaker found.</div>;
  }

  return (
    <div>
      <Link to="/" className="sneaker-overlay"></Link>
      <div className="sneaker-details-container">
        <div className="details-general-block">
          <div className="details-left-block">
            <img src={sneaker.imgUrl} alt={sneaker.title} className="details-image" />
          </div>
          <div className="details-right-block">
            <div className="details-top-art-stock">
              <p className="details-articul">Артикул: {sneaker.vendorСode}</p>
              <p className="details-articul">
                В наличии: <span className="details-count-stock">{sneaker.inStock} шт</span>
              </p>
            </div>
            <h1 className="details-title">{sneaker.title}</h1>
            <ul className="details-stars-list">
              {Array.from({ length: sneaker.stars }).map((_, index) => (
                <li key={index}>
                  <img src={star} alt="star" />
                </li>
              ))}
            </ul>
            <p>Выберите размер:</p>
            <ul className="details-size-list">
              {sneaker.sizes.map((size, index) => (
                <li key={index} className="details-size-item">
                  {size}
                </li>
              ))}
            </ul>
            <div className="details-prices">
              <p className="details-current-price">{sneaker.price} </p>
              <p className="details-old-price">{sneaker.oldPrice} </p>
            </div>
            <Link to="/" className="details-btn" onClick={() => handleOverlayClick(sneaker)}>
              Заказать
            </Link>
            <ul className="details-list-tip">
              <li className="details-item-tip">
                <img src={galochka} alt="Галочка" className="details-galochka" />
                Бесплатная доставка до двери
              </li>
              <li className="details-item-tip">
                <img src={galochka} alt="Галочка" className="details-galochka" />
                Оплата заказа при получении
              </li>
              <li className="details-item-tip">
                <img src={galochka} alt="Галочка" className="details-galochka" />
                Обмен в течение двух недель
              </li>
            </ul>
          </div>
        </div>
        <div className="details-under-block">
          <div className="details-interpreter">
            <h3 className="details-under-heading">Описание</h3>
            <div className="details-description">
              <p className="details-under-text text-description">{sneaker.description}</p>
            </div>
          </div>
          <div className="details-specifications">
            <h3 className="details-under-heading">Характеристики</h3>
            <div className="details-description">
              <p className="details-under-text">Пол: {sneaker.gender}</p>
              <p className="details-under-text">Цвет: {sneaker.color}</p>
              <p className="details-under-text">Состав: {sneaker.compound}</p>
              <p className="details-under-text">Страна: {sneaker.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
