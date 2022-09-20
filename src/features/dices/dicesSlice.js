import { createSlice } from "@reduxjs/toolkit";

let initialState = [
  { img: "./images/1.png", value: 1 },
  { img: "./images/2.png", value: 2 },
  { img: "./images/3.png", value: 3 },
];

export const dicesSlice = createSlice({
  name: "dices",
  initialState,
  reducers: {
    mix: (state, action) => {
      state.forEach((object, index) => {
        state[index] = action.payload[index];
      });
    },
  },
});

export const { mix } = dicesSlice.actions;
export const selectDices = (state) => state.dices;
export default dicesSlice.reducer;
