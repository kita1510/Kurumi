import React, { useContext, useEffect, useState } from "react";
import Sidebar from "~/components/sidebar/Sidebar";
import PaginationPage from "~/components/pagination/PaginationPage";
import SlideActive from "~/components/sliders/SlideActive";
import MainSlider from "~/components/sliders/MainSlider";
import RandomTopic from "~/components/RandomTopic";
import { Link } from "react-router-dom";
import ScrollOnTop from "~/components/shared/ScrollOnTop";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import Notification from "~/components/shared/Notification";
import Category from "~/components/Category";

const HomePage = () => {
  const { user, handleSignOut } = useContext<AuthProps>(AuthContext);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex justify-center">
      <div className="fixed top-24 right-20">
        <Notification />
      </div>
      {!user ? (
        <Link to={"/login"}>
          <button className="w-20 h-10 bg-red-600 hover:bg-red-700 fixed rounded-lg top-5 right-20 text-white font-[500]">
            Login
          </button>
        </Link>
      ) : (
        <button
          className="w-20 h-10 bg-red-600 hover:bg-red-800 fixed rounded-lg top-5 right-20 text-white font-[500]"
          onClick={handleSignOut}
        >
          Log Out
        </button>
      )}
      <div className="fixed left-0">
        <Sidebar />
      </div>
      <div className="w-[70%] ">
        <div className="mb-10">
          <SlideActive />
        </div>
        <div className="w-full h-[400px] relative flex gap-10 z-50">
          <MainSlider />
          <div className="">
            <RandomTopic />
            <Category />
          </div>
        </div>
        <div className="">
          <PaginationPage />
        </div>
      </div>
      <div>
        <ScrollOnTop />
      </div>
    </div>
  );
};

export default HomePage;
