import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userDataMock } from "../../mocks/users-tasks.mock";
import { IUser } from "../../interfaces";
import { ITask } from "../../interfaces";

const initialState: Array<IUser> = userDataMock;

interface IUserTask extends ITask {
  userId?: string;
}

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUserTask: (state, action: PayloadAction<IUserTask>) => {
      const { id, title, description, userId } = action.payload;
      const index = state.findIndex((user) => user.id === userId);

      state[index].tasks.push({
        id,
        title,
        description,
      });
    },
    editUserTask: (state, action) => {
      const { id, title, description, userId } = action.payload;
      const index = state.findIndex((user) => user.id === userId);

      const taskIndex = state[index].tasks.findIndex((task) => task.id === id);

      state[index].tasks[taskIndex] = {
        id,
        title,
        description,
      };
    },
  },
});

export const { createUserTask, editUserTask } = usersSlice.actions;
export default usersSlice.reducer;
