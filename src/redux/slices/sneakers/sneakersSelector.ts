import { RootState } from "../../Store";

export const sneakersSelector = (state: RootState) => {
  return state.sneakers;
};
