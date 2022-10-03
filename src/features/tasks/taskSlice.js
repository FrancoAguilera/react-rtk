import { createSlice } from "@reduxjs/toolkit";
import { tasks } from "../../mocks/tasks.mock.js";

const initialState = tasks;

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    deleteTask: (state, action) => state.filter((item) => item.id !== action.payload),
    addTask: (state, action) => {
      state.push(action.payload);
    },
    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const task = state.find((item) => item.id === id);
      if (task) {
        task.id = id;
        task.title = title;
        task.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
