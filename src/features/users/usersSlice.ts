import { createSlice } from "@reduxjs/toolkit";
import { Users } from "../../mocks";
import { IUser } from "../../interfaces";

const initialState: Array<IUser> = Users;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser: (state, action) => {
      console.log(action.payload);
    },
    editUser: (state, action) => {
      console.log(action.payload);
    },
    deleteUser: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { createUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
