import React from "react";

import { GrHomeOption } from "react-icons/gr";
import { RiCupLine, RiMessage3Line } from "react-icons/ri";
import { BiSearchAlt, BiBookOpen, BiMessageAltAdd, BiCabinet } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="w-24 border-r-2 h-[900px] border-black flex flex-col items-center gap-10">
    <div className="mt-20 flex flex-col gap-7">
      <Link to={"/"}>
        <GrHomeOption size={30} />
      </Link>
      <Link to={"/reading"}>
        <BiBookOpen size={30} />
      </Link>
      <RiMessage3Line size={30} />
      <BiSearchAlt size={30} />
      <RiCupLine size={30} />
      <BiMessageAltAdd size={30} />
      <BiCabinet size={30} />
    </div>
    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full flex justify-center items-center">
      <img
        className="w-10 h-10 rounded-full"
        src="https://i.pinimg.com/564x/7d/fe/5a/7dfe5a7570a2fadb319516e65153f4a2.jpg"
        alt=""
      />
    </div>
  </div>
);

export default Navbar;
