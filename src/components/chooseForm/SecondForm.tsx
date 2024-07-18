import { useFormContext } from "react-hook-form";
import choosepic from "../../images/choosepic.png";
import "../../App.scss";

type FormData = {
  bootsChoice: string[];
};

type InputData = {
  value: string;
  id: string;
  text: string;
};

const inputData: InputData[] = [
  { value: "boot1", id: "boot1", text: "Менее 36" },
  { value: "boot2", id: "boot2", text: "36-38" },
  { value: "boot3", id: "boot3", text: "39-41" },
  { value: "boot4", id: "boot4", text: "42-44" },
  { value: "boot5", id: "boot5", text: "45 и больше" },
];

export default function SecondForm() {
  const { register } = useFormContext<FormData>();

  return (
    <>
      <p className="choose-question">Какой размер вам подойдет?</p>
      <div className="choose-size">
        {inputData.map((item) => (
          <div key={item.id} className="choose-size-item">
            <input
              type="checkbox"
              id={item.id}
              value={item.value}
              className="custom-checkbox"
              {...register("bootsChoice" as const)}
            />
            <label htmlFor={item.id}>{item.text}</label>
          </div>
        ))}
      </div>
      <img src={choosepic} alt="Choose pic" className="choosepic" />
    </>
  );
}
