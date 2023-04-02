import React from "react";
import Navbar from "~/components/Navbar";
import PaginationPage from "~/components/PaginationPage";
import SlideActive from "~/components/SlideActive";
import SliderReading from "~/components/SliderReading";

const HomePage = () => (
  <div className="flex justify-center">
    <button className="w-20 h-10 bg-red-600 fixed rounded-lg top-5 right-20 text-white font-[500]">
      Login
    </button>
    <div className="fixed left-0">
      <Navbar />
    </div>
    <div className="w-[70%]">
      <SlideActive/>
      <PaginationPage />
    </div>
  </div>
);

export default HomePage;
