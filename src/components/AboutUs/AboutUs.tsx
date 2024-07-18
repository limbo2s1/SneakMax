import hands from "../../images/hands.png";
import figure from "../../icons/figure.svg";
import "../AboutUs/about.scss";

export default function AboutUs() {
  return (
    <div className="background-theme" id="about">
      <img className="about-figure" src={figure} alt="" />
      <div className="container general-container">
        <div className="about-general">
          <div className="about-block">
            <h3 className="about-heading">Пара слов о нас</h3>
            <p className="about-description">
              Спорт держит нас в форме. Учит дисциплине. Объединяет нас. Через спорт мы можем менять
              жизни. В том числе с помощью воодушевляющих историй спортсменов. Чтобы помочь тебе
              подняться и двигаться вперед.
            </p>
            <p className="mini-logo">SneakMax</p>
          </div>
          <img src={hands} alt="" className="about-img" />
        </div>
      </div>
    </div>
  );
}
