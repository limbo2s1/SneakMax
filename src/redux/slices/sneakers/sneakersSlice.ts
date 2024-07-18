import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { SNEAKERS_URL } from "../../../constants/const";

export type Sneaker = {
  id: number;
  title: string;
  imgUrl: string;
  price: string;
  description: string;
};

type FilterData = {
  minPrice: number;
  maxPrice: number;
  gender: string;
  sizes: string[];
};

type SneakersState = {
  allData: Sneaker[];
  data: Sneaker[];
  loading: "pending" | "fulfilled" | "rejected" | "idle";
  totalPages: number;
  currentPage: number;
};

const initialSneakerState: SneakersState = {
  allData: [],
  data: [],
  loading: "idle",
  totalPages: 0,
  currentPage: 1,
};

export const fetchSneakers = createAsyncThunk<Sneaker[], FilterData>(
  "sneakers/fetchSneakers",
  async (filterData, { rejectWithValue }) => {
    try {
      const sizesParam = filterData.sizes.map((size: string) => `sizes[]=${size}`).join("&");
      const genderParam = filterData.gender ? `&gender=${filterData.gender}` : "";
      const { data } = await axios.get(
        `${SNEAKERS_URL}sneakers?price[from]=${filterData.minPrice}&price[to]=${filterData.maxPrice}${genderParam}&${sizesParam}&limit=20`
      );
      return data.items;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("Произошла ошибка при загрузке кроссовок");
      }
    }
  }
);

export const sneakersSlice = createSlice({
  name: "sneakers",
  initialState: initialSneakerState,
  reducers: {
    loadMore(state) {
      const start = state.currentPage * 6;
      const end = start + 6;
      state.data = state.allData.slice(0, end);
      state.currentPage += 1;
    },
    resetData(state) {
      state.allData = [];
      state.data = [];
      state.currentPage = 1;
      state.totalPages = 0;
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSneakers.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchSneakers.fulfilled, (state, action: PayloadAction<Sneaker[]>) => {
      state.loading = "fulfilled";
      state.allData = action.payload;
      state.data = action.payload.slice(0, 6);
      state.totalPages = Math.ceil(action.payload.length / 6);
    });
    builder.addCase(fetchSneakers.rejected, (state) => {
      state.loading = "rejected";
    });
  },
});

export const { loadMore, resetData } = sneakersSlice.actions;

export default sneakersSlice.reducer;
