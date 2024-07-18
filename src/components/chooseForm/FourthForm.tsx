import { useFormContext } from "react-hook-form";
import otpravleno from "../../images/otpravleno.svg";
import { useState } from "react";

export default function FourthForm() {
  const [isShow, setShow] = useState(false);
  const showSubmit = () => {
    setShow(true);
  };

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="choose-lastform">
      <h2 className="choose-heading choose-last-heading">Ваша подборка готова!</h2>
      <p className="choose-last-description">
        Оставьте свои контактные данные, чтобы мы могли отправить подготовленный для вас каталог
      </p>
      <div className="display">
        <div className="choose-input-form">
          <div className="choose-list">
            <h2 className="choose-takeoffer">Получить предложение</h2>
            <p className="choose-takeoffer-description">
              Получите подборку подходящих для вас моделей на почту
            </p>
            <div>
              <input
                id="name"
                type="text"
                placeholder="Ваше имя"
                className="choose-input"
                {...register("name", { required: "Имя обязательно" })}
              />
              {errors.name && (
                <p className="choose-error-message">{errors.name.message as string}</p>
              )}
            </div>
            <div>
              <input
                id="email"
                type="email"
                placeholder="E-mail"
                className="choose-input"
                {...register("email", {
                  required: "Электронная почта обязательна",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Электронная почта должна содержать @",
                  },
                })}
              />
              {errors.email && (
                <p className="choose-error-message">{errors.email.message as string}</p>
              )}
            </div>
            <button type="submit" onClick={() => showSubmit()} className="choose-btn-send">
              Получить
            </button>
          </div>
        </div>
        {isShow && <img src={otpravleno} alt="" className="choose-otpravleno" />}
      </div>
    </div>
  );
}
