import React from "react";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import Sidebar from "~/components/sidebar/Sidebar";

const DetailTopic = () => {
  const data = useLocation();

  const { title } = useParams();
  console.log(data.state);

  console.log(title);
  return (
    <div className="flex w-full">
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-24 mt-0 px-20 py-10 flex gap-5 flex-col w-full">
        <div className="flex items-center gap-2">
          <Link to="/">
            <button className="font-semibold hover:text-red-500 flex items-center gap-2">
              <HiHome />
              Trang chủ /
            </button>
          </Link>
          <button className="font-semibold hover:text-red-500">Topic</button>/
          <button className="font-semibold hover:text-red-500">{title}</button>/
        </div>
        <div className="flex gap-10 mt-5 w-full h-[600px]">
          <div className="w-3/5 h-[300px] bg-slate-200 relative">
            <img
              className="w-full h-full object-cover "
              src="https://i.pinimg.com/564x/e2/94/c6/e294c6593beacbefaf667b305eba196f.jpg"
              alt=""
            />
            <div className="absolute top-0 w-full h-full bg-opacity-70 bg-black p-5">
              <img src="" alt="" />
              <div className="font-semibold text-white text-3xl">{title}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTopic;
