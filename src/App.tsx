import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReadingPage from "./pages/ReadingPage";

function App() {
  return (
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/reading" element={<ReadingPage />} />
    </Routes>
  );
}

export default App;
