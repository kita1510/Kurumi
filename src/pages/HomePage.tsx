import React, { useContext, useEffect } from "react";
import Sidebar from "~/components/sidebar/Sidebar";
import PaginationPage from "~/components/pagination/Pagination";
import SlideActive from "~/components/sliders/SlideUserActive";
import MainSlider from "~/components/sliders/MainSlider";
import RandomTopic from "~/components/pagination/RandomTopic";
import { Link } from "react-router-dom";
import ScrollOnTop from "~/components/shared/ScrollOnTop";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import Category from "~/components/Category";


const HomePage = () => {
  const { user, handleSignOut } = useContext<AuthProps>(AuthContext);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="flex justify-center">
      {!user ? (
        <Link to={"/login"}>
          <button className="w-20 h-10 z-[9999999] bg-red-600 hover:bg-red-700 fixed rounded-lg top-5 right-16 text-white font-[500]">
            Login
          </button>
        </Link>
      ) : (
        <button
          className="w-20 h-10 bg-red-600 z-[9999999] hover:bg-red-800 fixed rounded-lg top-5 right-16 text-white font-[500]"
          onClick={handleSignOut}
        >
          Log Out
        </button>
      )}
      <div className="fixed left-0 z-50">
        <Sidebar />
      </div>
      <div className="w-9/12 ">
        <div className="mb-10">
          <SlideActive />
        </div>
        <div className="w-full h-[400px] relative flex flex-row gap-10 z-40">
          <MainSlider />
          <RandomTopic />
          <div className="absolute right-0 top-52">
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
