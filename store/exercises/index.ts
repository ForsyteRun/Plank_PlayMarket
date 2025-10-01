import { defaultPlankList } from "@/data/defaultPlank";
import type { IPLank } from "@/types/plank";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    setCustomExercises: (
      state: InitialState,
      action: PayloadAction<IPLank>
    ) => {
      state.custom = state.custom.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    removeCustomExercises: (
      state: InitialState,
      action: PayloadAction<string>
    ) => {
      state.custom = state.custom.filter((item) => item.id !== action.payload);
    },
  },
});

export default exercisesSlice;
