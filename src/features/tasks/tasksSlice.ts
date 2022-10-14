import { createSlice } from "@reduxjs/toolkit";
import { Tasks } from "../../mocks";
import { ITask } from "../../interfaces";

const initialState: Array<ITask> = Tasks;

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    createTask: (state, action) => {
      console.log(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description, user_id } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      state[taskIndex] = {
        id,
        title,
        description,
        user_id,
      };
    },
    deleteTask: (state, action) => state.filter((task) => task.id !== action.payload),
  },
});

export const { createTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
