import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  bearerToken: null,
  currentUser: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      // console.log("currentUser:", state.currentUser);
    },
    setBearerToken: (state, action) => {
      state.bearerToken = action.payload;
    },
  },
});

export const { setAuthenticated, setBearerToken, setCurrentUser} = authSlice.actions;
export default authSlice.reducer;
