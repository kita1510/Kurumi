/* eslint-disable react/prop-types */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { PostInfo } from "~/hooks/usePost";
import Image from "./Image";

const RankingCard = ({ props, index }: { props: PostInfo; index: number }) => {
  // console.log(props?.coverPage);
  return (
    <div className="w-[40rem] h-24 p-3 bg-white flex items-center gap-5">
      <div className="w-20 text-center text-2xl">{index + 1}</div>
      <Image className="w-20 h-20" src={props?.coverPage} alt="" />
      <div className="flex justify-between gap-3 w-full">
        <div className="flex flex-col">
          <Link to={`/topic/${props?.title}`}>
            <div className=" font-semibold text-xl cursor-pointer hover:text-red-700">
              {props?.title}
            </div>
          </Link>
          <div className="">{props?.title}</div>
        </div>
        <div className="flex items-center gap-3">
          <AiFillHeart cursor={"pointer"} fill={"black"} size={24} />
          <span className=" text-xl">{props?.PostOnLiked?.length}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RankingCard);
