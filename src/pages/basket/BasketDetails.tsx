import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  basketSelector,
  removeProduct,
  removeBasket,
  BasketItem,
  BasketState,
} from "../../redux/slices/basket/basketSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import "../basket/BasketDetails.scss";
import downArrow from "../../icons/downArrow.svg";
import { Link, useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

type RootState = {
  basket: BasketState;
};

const generateOrderNumber = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

const BasketDetails: React.FC = () => {
  const basket = useSelector((state: RootState) => basketSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderDetailsVisible, setOrderDetailsVisible] = useState(true);
  let articul = generateOrderNumber();

  console.log(basket);
  const countOfOrderItems = basket.products.length;
  const totalAmount = basket.products.reduce(
    (total, item) => total + parseFloat(item.product.price),
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const productTitles = basket.products.map((product) => product.product.title);

      articul = generateOrderNumber();

      await axios.post("https://c45a8f1adce0f1b6.mokky.dev/zakazi", {
        articul: articul,
        name: data.name,
        phone: data.phone,
        email: data.email,
        orderDetails: productTitles,
        totalAmount: totalAmount,
      });
      dispatch(removeBasket());
      navigate("/");
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleRemoveItem = (uuid: string) => {
    dispatch(removeProduct(uuid));
  };

  const toggleOrderDetails = () => {
    setOrderDetailsVisible(!orderDetailsVisible);
  };

  return (
    <div>
      <Link to="/" className="basket-overlay"></Link>
      <div className="basket-details-container">
        <div className="basket-details-header">
          <p className="basket-details-heading">Оформление заказа</p>
          <p className="basket-details-order">Заказ {articul}</p>
        </div>
        <div className="basket-details-all-info">
          <p className="basket-details-product">
            <span className="basket-details-description">Товаров в заказе:</span>{" "}
            <span className="basket-details-count">{countOfOrderItems} шт</span>
          </p>
          <p className="basket-details-product">
            <span className="basket-details-description">Общая сумма заказа:</span>{" "}
            <span className="basket-details-count">{totalAmount} ₽</span>
          </p>
          <div className="basket-details-sostav" onClick={toggleOrderDetails}>
            <p className="basket-details-structure">Состав заказа</p>
            <img
              src={downArrow}
              alt=""
              className={`basket-details-drop-down ${orderDetailsVisible ? "open" : ""}`}
            />
          </div>
          {orderDetailsVisible &&
            (basket.products.length === 0 ? (
              <p className="basket-empty">Корзина пуста</p>
            ) : (
              basket.products.map((item: BasketItem) => (
                <div key={item.uuid} className="basket-details-sneakers">
                  <div className="basket-product-main  basket-details-main">
                    <img
                      className="basket-img"
                      src={item.product.imgUrl}
                      alt={item.product.title}
                    />
                    <div className="basket-product-details">
                      <p className="basket-product-title">{item.product.title}</p>
                      <p className="basket-product-price">{item.product.price} ₽</p>
                    </div>
                  </div>
                  <p onClick={() => handleRemoveItem(item.uuid)} className="basket-details-remove">
                    Удалить
                  </p>
                </div>
              ))
            ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="basket-details-form">
          <div>
            <input
              id="name"
              type="text"
              placeholder="Ваше имя"
              className="basket-details-input"
              {...register("name", { required: "Имя обязательно" })}
            />
            {errors.name && <p className="basket-error-message">{errors.name.message}</p>}
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Номер телефона"
              className="basket-details-input"
              {...register("phone", {
                required: "Номер телефона обязателен",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Номер телефона должен содержать только цифры",
                },
              })}
            />
            {errors.phone && <p className="basket-error-message">{errors.phone.message}</p>}
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              className="basket-details-input"
              {...register("email", {
                required: "Электронная почта обязательна",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Электронная почта должна содержать @",
                },
              })}
            />
            {errors.email && <p className="basket-error-message">{errors.email.message}</p>}
          </div>
          <button type="submit" className="basket-details-send">
            Оформить заказ
          </button>
        </form>
      </div>
    </div>
  );
};

export default BasketDetails;
