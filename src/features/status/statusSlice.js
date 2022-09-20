import { createSlice } from "@reduxjs/toolkit";
//Tài: 0, Xỉu: 1
let initialState = { choosen: "", win: 0, totalPlay: 0 };
export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    updateChoose: (state, action) => {
      state.choosen = action.payload.choosen;
    },
    updateGameWin: (state) => {
      state.win++;
    },
    updateGamePlayed: (state) => {
      state.totalPlay++;
    },
  },
});
export const { updateGamePlayed, updateGameWin, updateChoose } =
  statusSlice.actions;
export const selectStatus = (state) => state.status;
export default statusSlice.reducer;
