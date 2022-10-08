import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import { UsersList } from "./components/users-list/users-list";
import { TaskList } from "./components/tasks-list/tasks-list";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user-tasks/:userId" element={<TaskList />} />
      </Routes>
    </div>
  );
}

export default App;
