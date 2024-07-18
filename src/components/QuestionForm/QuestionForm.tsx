import { useForm } from "react-hook-form";
import insta from "../../images/textinsta.png";
import firstPicture from "../../images/1.png";
import secondPicture from "../../images/2.jpg";
import thirdPicture from "../../images/3.jpg";
import fourthPicture from "../../images/4.jpg";
import fifthPicture from "../../images/5.jpg";
import "../QuestionForm/QuestionForm.scss";

type FormData = {
  name: string;
  phone: string;
};

export default function QuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="container" id="formquestion">
      <div className="question-form-block">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <h2 className="question-form-heading">Есть вопросы?</h2>
          <p className="question-form-description">
            Заполните форму и наш менеджер свяжется с вами
          </p>
          <div>
            <input
              id="name"
              type="text"
              placeholder="Ваше имя"
              className="question-form-input question-form-first"
              {...register("name", { required: "Имя обязательно" })}
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div>
            <input
              id="phone"
              type="tel"
              placeholder="Номер телефона"
              className="question-form-input question-form-second"
              {...register("phone", {
                required: "Номер телефона обязателен",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Номер телефона должен содержать только цифры",
                },
              })}
            />
            {errors.phone && <p className="error-message">{errors.phone.message}</p>}
          </div>
          <button type="submit" className="question-form-submit">
            Отправить
          </button>
        </form>
        <div className="insta-block">
          <div className="insta">
            <img className="insta-logo" src={insta} alt="Instagram logo" />
          </div>
          <ul id="cssportal-grid">
            <li id="div5">
              <img src={firstPicture} alt="Picture 1" />
            </li>
            <li id="div2">
              <img src={secondPicture} alt="Picture 2" />
            </li>
            <li id="div3">
              <img src={thirdPicture} alt="Picture 3" />
            </li>
            <li id="div4">
              <img src={fourthPicture} alt="Picture 4" />
            </li>
            <li id="div1">
              <img src={fifthPicture} alt="Picture 5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
