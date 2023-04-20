import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Topic from "~/components/shared/Topic";
import Sidebar from "~/components/sidebar/Sidebar";
import useListPost from "~/hooks/useListPost";

const Ranking = () => {
  const listPost = useListPost();
  console.log(listPost);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-44 mt-14 flex gap-5 flex-col ">
        <div className="flex items-center gap-2">
          <Link to="/">
            <button className="font-semibold hover:text-red-500 flex items-center gap-2">
              <HiHome />
              Trang chủ /
            </button>
          </Link>
          <button className="font-semibold hover:text-red-500">Bảng xếp hạng</button>/
        </div>
        <div className="text-xl font-normal uppercase">BẢNG XẾP HẠNG CÁC BÀI VIẾT</div>
        {listPost
          ?.sort((a, b) => b?.PostOnLiked?.length - a?.PostOnLiked?.length)
          .map((l, index) => {
            return (
              <div>
                <div className="w-[40rem] h-24 p-3 bg-white flex items-center gap-5">
                  <div className="w-20 text-center text-2xl">{index + 1}</div>
                  <img
                    className="w-16 h-20 object-cover object-right"
                    src="https://images7.alphacoders.com/100/1002864.png "
                    alt=""
                  />
                  <div className="flex justify-between gap-3 w-full">
                    <div className="flex flex-col">
                        <Link to={`/topic/${l?.title}`}>
                      <div className=" font-semibold text-xl cursor-pointer hover:text-red-700">
                        {l?.title}
                      </div>
                        </Link>
                      <div className="">{l?.title}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AiOutlineHeart cursor={"pointer"} size={24} />
                      <span className=" text-xl">{l?.PostOnLiked?.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div></div>
    </div>
  );
};

export default Ranking;
