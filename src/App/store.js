import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Slices/LoginSlice.js";
export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
