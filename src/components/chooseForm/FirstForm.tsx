import boots from "../../images/boots.png";
import "../../App.scss";
import { useFormContext } from "react-hook-form";

type FormData = {
  bootsChoice: string[];
};

export default function FirstForm() {
  const { register } = useFormContext<FormData>();

  return (
    <>
      <p className="choose-question">Какой тип кроссовок рассматриваете?</p>
      <div className="list-boots">
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot1"
            id="boot1"
            className="custom-checkbox"
          />
          <label htmlFor="boot1">Кеды</label>
        </div>
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot2"
            id="boot2"
            className="custom-checkbox"
          />
          <label htmlFor="boot2">Кеды</label>
        </div>
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot3"
            id="boot3"
            className="custom-checkbox"
          />
          <label htmlFor="boot3">Кеды</label>
        </div>
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot4"
            id="boot4"
            className="custom-checkbox"
          />
          <label htmlFor="boot4">Кеды</label>
        </div>
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot5"
            id="boot5"
            className="custom-checkbox"
          />
          <label htmlFor="boot5">Кеды</label>
        </div>
        <div className="boot-item">
          <img src={boots} alt="Boots" />
          <input
            type="checkbox"
            {...register("bootsChoice")}
            value="boot6"
            id="boot6"
            className="custom-checkbox"
          />
          <label htmlFor="boot6">Кеды</label>
        </div>
      </div>
    </>
  );
}
