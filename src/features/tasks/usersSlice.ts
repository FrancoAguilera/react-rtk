import { createSlice } from "@reduxjs/toolkit";
import { userDataMock } from "../../mocks/users-tasks.mock";
import { IUser } from "../../interfaces";

const initialState: Array<IUser> = userDataMock;

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
