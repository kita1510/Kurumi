import React, { useContext, useState } from "react";
import { GrHomeOption } from "react-icons/gr";
import { RiCupLine, RiMessage3Line } from "react-icons/ri";
import { BiSearchAlt, BiBookOpen, BiMessageAltAdd, BiCabinet } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import ToolTipComponent from "../shared/ToolTip";
import SearchTab from "../SearchTab";

const Sidebar = () => {
  const { user } = useContext<AuthProps>(AuthContext);
  const profile = useProfile();
  const [isTab, setIsTab] = useState<boolean>(false);

  // console.log(isTab);

  const navigations = [
    { id: 1, content: "Home", component: <GrHomeOption size={30} />, link: "/" },
    { id: 2, content: "Reading", component: <BiBookOpen size={30} />, link: "/reading" },
    { id: 3, content: "Messages", component: <RiMessage3Line size={30} />, link: "/reading" },
    {
      id: 4,
      content: "Search",
      component: <BiSearchAlt size={30} />,
      handleClick: () => setIsTab(!isTab),
    },
    { id: 5, content: "Ranking", component: <RiCupLine size={30} />, link: "/reading" },
    { id: 6, content: "Create", component: <BiMessageAltAdd size={30} />, link: "/reading" },
    { id: 7, content: "Library", component: <BiCabinet size={30} />, link: "/library" },
  ];
  return (
    <div className="flex z-[9]">
      <div className="px-5 border-r-2 h-[900px] border-black flex flex-col items-center gap-6 fixed top-0 left-0">
        <div className="mt-20 flex flex-col gap-1">
          {navigations.map((n) => {
            return (
              <ToolTipComponent content={n.content} placement={"right"} key={n.id}>
                <Link to={{ pathname: n.link }}>
                  <button
                    onClick={n.handleClick}
                    className="w-14 h-14 hover:bg-slate-100 rounded-full flex justify-center items-center"
                  >
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
                className="w-10 h-10 rounded-full object-cover"
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
      <div className="z-[100]">
        {isTab ? <SearchTab></SearchTab> : <React.Fragment></React.Fragment>}
      </div>
    </div>
  );
};

export default Sidebar;
