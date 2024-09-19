import { createSlice } from "@reduxjs/toolkit";

const initialState = {data:{}};
export const outputSlice = createSlice({
  name: "output",
  initialState,
  reducers: {
    printData: (state, action) => {
      state.data = action.payload;
    //   console.log(initialState,state);
    },
  },
});

export const { printData } = outputSlice.actions;
export default outputSlice.reducer;
