import { configureStore } from "@reduxjs/toolkit";
import { sneakersSlice } from "./slices/sneakers/sneakersSlice";
import { useDispatch } from "react-redux";
import basketReducer from "./slices/basket/basketSlice";
import { teamSlice } from "./slices/team/teamSlice";

export const store = configureStore({
  reducer: {
    sneakers: sneakersSlice.reducer,
    team: teamSlice.reducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
