import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { fetchSneakers, resetData, Sneaker } from "../../redux/slices/sneakers/sneakersSlice";
import { sneakersSelector } from "../../redux/slices/sneakers/sneakersSelector";
import { Pagination } from "./Pagination";
import { addProduct } from "../../redux/slices/basket/basketSlice";
import { FilterForm, FilterFormValues } from "./FilterForm";
import { SneakerList } from "./SneakerList";
import "./Catalog.scss";
import { useAppDispatch } from "../../redux/Store";

export default function Catalog() {
  const dispatch = useAppDispatch();
  const sneakers = useSelector(sneakersSelector);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([1850, 25768]);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSneakers({ sizes: [], minPrice: 1850, maxPrice: 25768, gender: "" }));
  }, [dispatch]);

  const onSubmit: SubmitHandler<FilterFormValues> = (data) => {
    const filterData = {
      ...data,
      sizes: selectedSizes,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    dispatch(resetData());
    dispatch(fetchSneakers(filterData));
  };

  const handleReset = () => {
    dispatch(resetData());
    dispatch(fetchSneakers({ sizes: [], minPrice: 1850, maxPrice: 25768, gender: "" }));
  };

  const handlePriceUpdate = (values: string[]) => {
    setPriceRange([Math.round(Number(values[0])), Math.round(Number(values[1]))]);
  };

  const toggleSizeSelection = (size: string) => {
    setSelectedSizes((prevSelectedSizes) =>
      prevSelectedSizes.includes(size)
        ? prevSelectedSizes.filter((s) => s !== size)
        : [...prevSelectedSizes, size]
    );
  };

  const viewSneakerDetails = (id: string) => {
    navigate(`/sneaker/${id}`);
  };

  const submitBasket = (item: Sneaker) => {
    dispatch(addProduct(item));
  };

  return (
    <div className="container catalog-container" id="catalog">
      <h4 className="catalog-heading">Каталог</h4>
      <div className="catalog-block">
        <FilterForm
          onSubmit={onSubmit}
          onReset={handleReset}
          onPriceUpdate={handlePriceUpdate}
          selectedSizes={selectedSizes}
          toggleSizeSelection={toggleSizeSelection}
          priceRange={priceRange}
        />
        {sneakers.loading && sneakers.data.length === 0 ? (
          <p>...loading</p>
        ) : (
          <SneakerList
            sneakers={sneakers.data}
            onViewDetails={viewSneakerDetails}
            onAddToBasket={submitBasket}
          />
        )}
      </div>
      <Pagination />
    </div>
  );
}
