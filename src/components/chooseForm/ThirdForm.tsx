import { useFormContext } from "react-hook-form";

export default function ThirdForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <p className="choose-question">Уточните какие-либо моменты</p>
      <div className="choose-blockarea">
        <textarea
          className="choose-textarea"
          {...register("details", { required: true })}
          placeholder="Введите сообщения"
        />
        {errors.details && <span>Это поле обязательно для заполнения</span>}
      </div>
    </>
  );
}
