import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedInUser: null,
    authToken: null,
  },
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      state.loggedInUser = action.payload; 
      state.authToken = action.payload.Token
},

  },

});

export const { registerUser, loginUser} = userSlice.actions;
export default userSlice.reducer;
