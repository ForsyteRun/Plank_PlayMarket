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
    setCustomExercises: (state, action: PayloadAction<IPLank>) => {
      const index = state.custom.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.custom[index] = action.payload;
      } else {
        state.custom.push(action.payload);
      }
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
