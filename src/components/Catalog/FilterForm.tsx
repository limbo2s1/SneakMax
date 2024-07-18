import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";

export type FilterFormValues = {
  gender: string;
  sizes: string[];
};

type FilterFormProps = {
  onSubmit: SubmitHandler<FilterFormValues>;
  onReset: () => void;
  onPriceUpdate: (values: string[]) => void;
  selectedSizes: string[];
  toggleSizeSelection: (size: string) => void;
  priceRange: [number, number];
};

const sizeBoots = ["35", "36", "37", "38", "39", "40", "41", "42", "43"];

export function FilterForm({
  onSubmit,
  onReset,
  onPriceUpdate,
  selectedSizes,
  toggleSizeSelection,
  priceRange,
}: FilterFormProps) {
  const { handleSubmit, register, setValue } = useForm<FilterFormValues>();

  useEffect(() => {
    setValue("sizes", selectedSizes);
  }, [selectedSizes, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="catalog-left-block">
        <h4 className="catalog-choose">Подбор по параметрам</h4>
        <p className="catalog-title-price">Цена, руб</p>
        <div className="price-range-display">
          <p className="catalog-range-price">{priceRange[0]}</p>
          <p className="catalog-range-price">{priceRange[1]}</p>
        </div>
        <Nouislider
          range={{ min: 1850, max: 25768 }}
          start={[1850, 25768]}
          onUpdate={onPriceUpdate}
          connect
        />
        <p className="catalog-description">Пол</p>
        <div className="catalog-checkbox-block">
          <input
            type="checkbox"
            {...register("gender")}
            value="Мужской"
            id="male"
            className="custom-checkbox"
          />
          <label htmlFor="male" className="catalog-gender-label">
            мужской
          </label>
          <input
            type="checkbox"
            {...register("gender")}
            value="Женский"
            id="female"
            className="custom-checkbox"
          />
          <label htmlFor="female" className="catalog-gender-label">
            женский
          </label>
        </div>
        <p className="catalog-description">Размер</p>
        <ul className="size-list">
          {sizeBoots.map((size) => (
            <li
              key={size}
              className={`size-item ${selectedSizes.includes(size) ? "selected" : ""}`}
              onClick={() => toggleSizeSelection(size)}
            >
              {size}
            </li>
          ))}
        </ul>
        <input type="hidden" {...register("sizes")} value={selectedSizes.join(",")} />
        <div className="catalog-btns">
          <button type="submit" className="catalog-btn">
            Применить
          </button>
          <a className="catalog-reset" onClick={onReset}>
            сбросить
          </a>
        </div>
      </div>
    </form>
  );
}
