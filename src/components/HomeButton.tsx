import React from "react";
import { GrHomeRounded } from "react-icons/gr";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <div className="fixed top-5 left-5">
      <Link to="/">
        <div className="flex justify-center items-center gap-3 font-semibold h-10 p-4 hover:bg-slate-300">
          <GrHomeRounded className="font-bold" size={20} />
          Home page
        </div>
      </Link>
    </div>
  );
};

export default HomeButton;
