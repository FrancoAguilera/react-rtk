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
      console.log(action.payload);
    },
    deleteTask: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { createTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
