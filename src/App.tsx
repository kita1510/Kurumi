import React, { Fragment, Suspense } from "react";
// import { Route } from "react-router";
import { Routes, Route, createBrowserRouter } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
import Register from "./pages/auth/Register";
import ReadingPage from "./pages/home/ReadingPage";
import Login from "./pages/auth/Login";
import ProfilePage from "./pages/home/ProfilePage";
import EditProfile from "./pages/home/EditProfile";
import ListPage from "./pages/home/ListPage";
import CategoryPage from "./pages/home/CategoryPage";
import { useToast } from "./contexts/ToastContext";
import ToastMessage from "./components/shared/Toast";
import { useIsFetching, useIsMutating } from "@tanstack/react-query";
import MoonLoading from "~/components/icons/MoonLoader";
import CreatePost from "./pages/home/CreatePost";
import Ranking from "./pages/home/Ranking";

const DetailTopic = React.lazy(() => import("./pages/home/DetailTopic"));
const Library = React.lazy(() => import("./pages/home/Library"));
const HomePage = React.lazy(() => import("./pages/home/HomePage"));

function App() {
  const { toggle, text } = useToast();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  // console.log(isFetching > 0);

  return (
    <div className="relative">
      <Routes>
        {/* <Navbar /> */}
        <Route
          path="/"
          element={
            <Suspense fallback={<MoonLoading loading={true} />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route path="/reading" element={<ListPage />} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/profile/edit/:id" element={<EditProfile />} />
        <Route
          path="/topic/:title"
          element={
            <Suspense fallback={<MoonLoading loading={true} />}>
              <DetailTopic />
            </Suspense>
          }
        />
        <Route path="/read/:title" element={<ReadingPage />} />
        <Route
          path="/library"
          element={
            <Suspense fallback={<MoonLoading loading={true} />}>
              <Library />
            </Suspense>
          }
        />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
      {toggle ? <ToastMessage text={text} time={2000} /> : <Fragment></Fragment>}
      {/* <MoonLoading loading={isFetching + isMutating > 0} /> */}
    </div>
  );
}

export default App;
