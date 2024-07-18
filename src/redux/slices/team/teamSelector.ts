import { RootState } from "../../Store";

export const teamSelector = (state: RootState) => {
  return state.team;
};
