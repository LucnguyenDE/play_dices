import { configureStore } from "@reduxjs/toolkit";
import dicesReducer from "../features/dices/dicesSlice";
import statusReducer from "../features/status/statusSlice";

export const store = configureStore({
  reducer: {
    dices: dicesReducer,
    status: statusReducer,
  },
});
