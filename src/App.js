import React from "react";
import { useSelector } from "react-redux";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { TaskForm } from "./components/task-form/task-form.js";
import { TaskList } from "./components/task-list/task-list.js";

function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <header className="flex justify-between px-5 py-2">
        <h1>Ultimate Task Manager / Tasks: {tasks.length}</h1>
        <Link to="/create" className="bg-indigo-600 px-2 py-1 rounded-sm text-sm">
          <button>Create</button>
        </Link>
      </header>

      <div className="flex items-center justify-center h-full">
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
