import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Navbar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import ReadingPage from "./pages/ReadingPage";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/reading" element={<ReadingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
