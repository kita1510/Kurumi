import React from "react";
import Navbar from "~/components/Sidebar";
import PaginationPage from "~/components/PaginationPage";
import SlideActive from "~/components/SlideActive";
import MainSlider from "~/components/MainSlider";
import RandomTopic from "~/components/RandomTopic";
import { Link } from "react-router-dom";
import ScrollOnTop from "~/components/ScrollOnTop";

const HomePage = () => (
  <div className="flex justify-center">
    <Link to={"/register"}>
    <button className="w-20 h-10 bg-red-600 fixed rounded-lg top-5 right-20 text-white font-[500]">
      Login
    </button>
    </Link>
    <div className="fixed left-0">
      <Navbar />
    </div>
    <div className="w-[70%] ">
      <div className="mb-10">
        <SlideActive />
      </div>
      <div className="w-full h-[400px] relative flex gap-10 z-50">
        <MainSlider />
        <RandomTopic />
      </div>
      <div className="">
        <PaginationPage />
      </div>
    </div>
    <div>
      <ScrollOnTop/>
    </div>
  </div>
);

export default HomePage;
