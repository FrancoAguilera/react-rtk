import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import { UsersList } from "./components/users-list/users-list";
import { TaskList } from "./components/tasks-list/tasks-list";
import { TaskForm } from "./components/task-form/task-form";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user-tasks/:userId" element={<TaskList />} />
        <Route path="/task-form/new/:userId" element={<TaskForm />} />
        <Route path="/task-form/edit/:userId/:taskId" element={<TaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
