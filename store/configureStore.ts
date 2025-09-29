import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";

import ExercisesReducer from "./exercises";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["exercises"],
};

const rootReducer = combineReducers({
  exercises: ExercisesReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
