import { useSelector, useDispatch } from "react-redux";
import { loadMore } from "../../redux/slices/sneakers/sneakersSlice";
import { RootState } from "../../redux/Store";

export const Pagination = () => {
  const { currentPage, totalPages } = useSelector((state: RootState) => ({
    currentPage: state.sneakers.currentPage,
    totalPages: state.sneakers.totalPages,
  }));
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    if (currentPage < totalPages) {
      dispatch(loadMore());
    }
  };

  return (
    <div className="pagination-container">
      {currentPage < totalPages && (
        <button onClick={handleLoadMore} className="btn btn-show">
          Показать еще
        </button>
      )}
    </div>
  );
};
