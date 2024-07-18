import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { TEAM_URL } from "../../../constants/const";

export type TeamMember = {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
};

type TeamState = {
  data: TeamMember[];
  isLoading: boolean;
  isError: boolean;
};

const initialTeamState: TeamState = {
  data: [],
  isLoading: false,
  isError: false,
};

export const fetchTeam = createAsyncThunk<TeamMember[]>("team/fetchTeam", async () => {
  const { data } = await axios.get<TeamMember[]>(`${TEAM_URL}team`);
  return data;
});

export const teamSlice = createSlice({
  name: "team",
  initialState: initialTeamState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeam.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchTeam.fulfilled, (state, action: PayloadAction<TeamMember[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTeam.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default teamSlice.reducer;
