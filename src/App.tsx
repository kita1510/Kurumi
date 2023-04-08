import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Navbar from "./components/sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import ReadingPage from "./pages/ReadingPage";
import Login from "./pages/Login";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/EditProfile";
import ListPage from "./pages/ListPage";
import CategoryPage from "./pages/CategoryPage";
import DetailTopic from "./pages/DetailTopic";

function App() {
  return (
    <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<HomePage />} />
      <Route path="/reading" element={<ListPage />} />
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:id" element={<ProfilePage />} />
      <Route path="/profile/edit/:id" element={<EditProfile />} />
      <Route path="/topic/:title" element={<DetailTopic />} />
    </Routes>
  );
}

export default App;
