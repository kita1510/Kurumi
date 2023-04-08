import { Button } from "@material-tailwind/react";
import React from "react";
import { AiFillRead } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { Link, useLocation, useParams } from "react-router-dom";
import Sidebar from "~/components/sidebar/Sidebar";
import { randomBgColor } from "~/utils/listColor";

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

            <div className="absolute top-0 w-full h-full bg-opacity-80 bg-black p-5 flex gap-5">
              <div>
                <img
                  className="w-40 h-52 object-cover"
                  src="https://i.pinimg.com/564x/ed/9d/61/ed9d617e86b055589629ad79147be790.jpg"
                  alt=""
                />
                <Link to={{ pathname: `/read/${title}` }} state={data.state}>
                  <button className="w-40 h-10 bg-white flex items-center justify-center gap-7 hover:bg-slate-300 ">
                    <AiFillRead size={24} />
                    <span className="font-semibold">Đọc</span>
                  </button>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-semibold text-3xl text-green-500">{title}</div>
                <div className="font-semibold text-base text-white h-32">
                  {data.state?.post?.content}
                </div>
                <div className="flex gap-10 justify-between">
                  <div className="font-semibold text-base text-white flex gap-1 items-center">
                    Thể loại:
                    <button className={`py-1 ml-2 rounded-lg px-2 ${randomBgColor()} `}>
                      {data.state?.category.name}
                    </button>
                  </div>
                  {/* <div className="font-semibold text-base text-white">Lượt thích</div>
                  <div className="font-semibold text-base text-white">
                    Năm: {data.state?.post?.createdAt?.split("-")[0]}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTopic;
