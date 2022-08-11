import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  details: "",
};

const ApiReducer = createSlice({
  name: "ApiCall",
  initialState,
  reducers: {
    getApiData: (state, actions) => {
      state.details = actions.payload;
    },
  },
});

export const { getApiData } = ApiReducer.actions;
export default ApiReducer.reducer;
