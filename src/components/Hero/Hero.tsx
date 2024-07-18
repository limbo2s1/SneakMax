import "../Hero/Hero.scss";

export default function Hero() {
  return (
    <div className="background-theme">
      <div className="container container-hero">
        <div className="hero-block">
          <h2 className="hero-heading">Кроссовки известных брендов с доставкой по России и СНГ</h2>
          <p className="hero-description">
            Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok, Converse и многие другие по
            низким ценам
          </p>
          <div className="btn-hero-block">
            <button className="btn btn-hero">Перейти к покупкам</button>
          </div>
        </div>
        <p className="background-text">SneakMax</p>
      </div>
    </div>
  );
}
