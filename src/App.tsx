import React, { Fragment } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/auth/Register";
import ReadingPage from "./pages/ReadingPage";
import Login from "./pages/auth/Login";
import ProfilePage from "./pages/ProfilePage";
import EditProfile from "./pages/home/EditProfile";
import ListPage from "./pages/ListPage";
import CategoryPage from "./pages/home/CategoryPage";
import DetailTopic from "./pages/home/DetailTopic";
import Library from "./pages/Library";
import { useToast } from "./contexts/ToastContext";
import ToastMessage from "./components/shared/Toast";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import MoonLoading from "~/components/icons/MoonLoader";

function App() {
  const { toggle, text } = useToast();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  // console.log(isFetching > 0);
  return (
    <div className="relative">
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
        <Route path="/read/:title" element={<ReadingPage />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      {toggle ? <ToastMessage text={text} time={2000} /> : <Fragment></Fragment>}
      <MoonLoading loading={isFetching + isMutating > 0} />
    </div>
  );
}

export default App;
