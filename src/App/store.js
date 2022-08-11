import { configureStore } from "@reduxjs/toolkit";
import ApiReducer from "../Slice/ApiSlice";
export const store = configureStore({
  reducer: {
    userReducer: ApiReducer,
  },
});
