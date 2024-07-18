import { RootState } from "../../Store";

export const basketSelector = (state: RootState) => {
  return state.basket;
};
