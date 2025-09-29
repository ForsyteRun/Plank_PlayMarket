import { useDispatch } from "react-redux";

import { bindActionCreators } from "@reduxjs/toolkit";

import exercises from "@/store/exercises";

const rootActions = {
  ...exercises.actions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(rootActions, dispatch);
};
