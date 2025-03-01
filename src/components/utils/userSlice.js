import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload.UserImpl);
    },
    removeUser: (state) => {
      state = {};
    },
  },
});

const userReducer = userSlice.reducer;

export const { addUser, removeUser } = userSlice.actions;

export default userReducer;
