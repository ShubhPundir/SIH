import { configureStore } from "@reduxjs/toolkit";
import pilReducer from "./slices/pilSlice.js";
import outputSlice from "./slices/outputSlice.js";
export const store = configureStore({
  reducer: { pilData: pilReducer, outputData: outputSlice },
});
