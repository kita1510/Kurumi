import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import SearchItem from "./sliders/SearchItem";

const SearchTab = () => {
  return (
    <div className="w-[480px] h-[800px] z-[99999] fixed ml-[100px] rounded-br-3xl rounded-tr-3xl border-r-2 bg-white">
      <div className="w-full h-1/4 border-b-2 border-b-black">
        <div className="pl-6 pt-8 text-2xl font-semibold">Tìm kiếm</div>
        <div className="w-11/12 h-12 rounded-xl bg-slate-100 mt-12 mx-auto relative">
          <input
            className="w-full h-full px-5 text-lg font-semibold outline-none rounded-xl bg-slate-100"
            type="text"
            placeholder="Search"
          />
          <div>
            <IoMdCloseCircle
              className="absolute top-1/2 right-5 bottom-1/2 my-auto"
              size={30}
            ></IoMdCloseCircle>
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <div className="px-5 py-3 mt-5 h-20 w-full flex justify-between items-center">
          <div className="font-semibold text-xl">Gần đây</div>
          <div className="font-semibold text-xl text-blue-600 hover:text-blue-900 cursor-pointer">
            Clear All
          </div>
        </div> */}
        <div className="flex flex-col mt-4">
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
          <SearchItem></SearchItem>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
