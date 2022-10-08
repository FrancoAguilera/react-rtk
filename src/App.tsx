import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import { UsersList } from "./components/users-list/users-list";

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
