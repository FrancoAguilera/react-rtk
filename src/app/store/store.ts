import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "../../features/tasks/tasksSlice";
import usersSlice from "../../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    tasks: tasksSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
