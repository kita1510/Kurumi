import React, { useState } from "react";
import Topic from "./Topic";

const PaginationPage = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center gap-5 mt-5 flex-col w-[70%]">
      <div className="flex justify-between gap-5 flex-wrap">
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
        <Topic />
      </div>
      <div className="flex gap-3 justify-center">
        <button className={`w-10 h-10 font-semibold text-white bg-red-500 rounded-xl`}>1</button>
        <button className={`w-10 h-10 font-semibold text-white bg-red-500 rounded-xl`}>2</button>
        <button className={`w-10 h-10 font-semibold text-white bg-red-500 rounded-xl`}>3</button>
        <button className={`w-10 h-10 font-semibold text-white bg-red-500 rounded-xl`}>4</button>
      </div>
    </div>
  );
};

export default PaginationPage;
