import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    username: "",
    password: "",
  },
  userArray: [],
};

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    inputSubmit(state, action) {
      state.user.username = action.payload.username;
      state.user.password = action.payload.password;
      state.userArray.push(state.user);
      console.log(state.userArray)
    },
  },
});

export const { inputSubmit } = LoginSlice.actions;

export default LoginSlice.reducer;
