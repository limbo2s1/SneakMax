import React, { useState } from "react";
import QuestionCircle from "../../icons/tooltip";
import "../ContactComp/Contact.scss";
import instagram from "../../icons/Instagram.svg";
import vk from "../../icons/VK.svg";

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div className="background-contact" id="contacts">
      <div className="container">
        <div className="contact-block">
          <div className="contact-left-section">
            <h3 className="contact-heading">Контакты</h3>
            <div className="contact-office-block">
              <p className="contact-office-text">ГЛАВНЫЙ ОФИС</p>
              <div
                className="tooltip-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <QuestionCircle className="tooltip" />
                {isHovered && (
                  <div className="hovered-tooltip">
                    <p className="hovered-tooltip-text">
                      Адрес и телефон для корреспонденции, инвесторов. <br /> Вопросы о доставке,
                      качестве обслуживания и товара <br /> просьба задавать в отдел продаж
                    </p>
                  </div>
                )}
              </div>
            </div>
            <p className="contact-number">+7 800 789 89 89</p>
            <p className="contact-adress">г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <p className="contact-office-text contact-second-text">ОТДЕЛ ПРОДАЖ</p>
            <p className="contact-second-number">+7 800 789 89 89</p>
            <p className="contact-adress">г. Санкт-Петербург, Комсомольская, 43 к1</p>
            <div className="contact-icons">
              <img className="icon-vk" src={vk} alt="VK" />
              <img className="icon-insta" src={instagram} alt="Instagram" />
            </div>
          </div>
          <div className="contact-right-section">
            <div className="map-container">
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
                className="map-link-top"
              >
                Санкт‑Петербург
              </a>
              <a
                href="https://yandex.ru/maps/2/saint-petersburg/house/2_ya_komsomolskaya_ulitsa_43/Z0kYdwNiSEAFQFtjfXRycXhqbQ==/?ll=30.142152%2C59.830499&utm_medium=mapframe&utm_source=maps&z=16.98"
                className="map-link-bottom"
              >
                2-я Комсомольская улица, 43 — Яндекс Карты
              </a>
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=30.142152%2C59.830499&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NzQwOTcwNBJb0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMi3RjyDQmtC-0LzRgdC-0LzQvtC70YzRgdC60LDRjyDRg9C70LjRhtCwLCA0MyIKDR8j8UEVblJvQg%2C%2C&z=16.98"
                className="map-iframe"
                frameBorder="1"
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
