import React, { useContext } from "react";

import { GrHomeOption } from "react-icons/gr";
import { RiCupLine, RiMessage3Line } from "react-icons/ri";
import { BiSearchAlt, BiBookOpen, BiMessageAltAdd, BiCabinet } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import ToolTipComponent from "./ToolTip";

const navigations = [
  { content: "Home", component: <GrHomeOption size={30} />, link: "/" },
  { content: "Reading", component: <BiBookOpen size={30} />, link: "/reading" },
  { content: "Messages", component: <RiMessage3Line size={30} />, link: "/reading" },
  { content: "Search", component: <BiSearchAlt size={30} />, link: "/reading" },
  { content: "Ranking", component: <RiCupLine size={30} />, link: "/reading" },
  { content: "Favorite", component: <BiMessageAltAdd size={30} />, link: "/reading" },
  { content: "Library", component: <BiCabinet size={30} />, link: "/reading" },
];

const Navbar = () => {
  const { user } = useContext<AuthProps>(AuthContext);
  const profile = useProfile();
  return (
    <div className="px-5 border-r-2 h-[900px] border-black flex flex-col items-center gap-6 fixed top-0 left-0">
      <div className="mt-20 flex flex-col gap-1">
        {navigations.map((n) => {
          return (
            <ToolTipComponent content={n.content}>
              <Link to={n.link}>
                <button className="w-14 h-14 hover:bg-slate-100 rounded-full flex justify-center items-center">
                  {n.component}
                </button>
              </Link>
            </ToolTipComponent>
          );
        })}
      </div>
      {user && (
        <Link to={"/profile/" + user?.name}>
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 rounded-full flex justify-center items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={
                profile?.avatar ||
                "https://i.pinimg.com/564x/7d/fe/5a/7dfe5a7570a2fadb319516e65153f4a2.jpg"
              }
              alt=""
            />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
