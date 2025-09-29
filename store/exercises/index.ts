import { defaultPlankList } from "@/data/defaultPlank";
import type { IPLank } from "@/types/plank";
import { createSlice } from "@reduxjs/toolkit";

export interface InitialState {
  default: IPLank[];
  custom: IPLank[];
}

const initialState: InitialState = {
  default: defaultPlankList,
  custom: [],
};

const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
});

export const {} = exercisesSlice.actions;
export default exercisesSlice.reducer;
