import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import { UsersList } from "./components/users-list/users-list";

/*
import { useSelector } from "react-redux";

import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { TaskForm } from "./components/task-form/task-form.js";
*/

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
