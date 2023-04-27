/* eslint-disable react/prop-types */
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import { Link } from "react-router-dom";
import { PostInfo } from "~/hooks/usePosts";
import { shortcutText } from "~/utils/formatText";
import { formatYear } from "~/utils/moment";
import Button from "./Button";
import Image from "./Image";

const SliderCard = ({ props }: { props: PostInfo }) => {
  return (
    <div className="w-full h-full bg-slate-200">
      <Image
        className="w-full h-full object-cover "
        src={
          props?.coverPage
            ? props?.coverPage
            : "https://i.pinimg.com/564x/e2/94/c6/e294c6593beacbefaf667b305eba196f.jpg"
        }
        alt=""
      />
      <div className="absolute top-0 w-full h-full bg-opacity-50 bg-black p-5 flex gap-5">
        <div className="absolute top-0 w-3/5 h-full bg-opacity-70 bg-black left-0 p-3">
          <div className="text-white font-[600] text-3xl font-monospace mt-4 break-words text-left pl-5">
            {props?.title}
          </div>
          <div className="flex pl-5 mt-3 gap-3">
            <div className="flex items-center gap-1">
              <AiFillHeart size={16} color="red" />
              <span className="font-semibold text-white text-sm">{props?.PostOnLiked?.length}</span>
            </div>
            <div className="flex items-center gap-1">
              <GoCalendar size={14} color="white" />
              <span className="font-semibold text-white text-sm">
                {formatYear(props?.createdAt)}
              </span>
            </div>
          </div>
          <div className="text-sm text-white mt-3 font-medium pl-5 text-left">
            {shortcutText(props?.description)}
          </div>
          <div className="mt-3 pl-5 text-left flex items-center gap-3">
            <span className="text-white text-sm font-semibold">Thể loại</span>
            {props?.Category.map((c) => (
              <React.Fragment key={c?.id}>
                <Link to={`/category/${c?.name}`}>
                  <Button className="px-2 py-1 text-white hover:bg-red-700 hover:border-red-700 border-white border-2 rounded-md text-sm ">
                    {c?.name}
                  </Button>
                </Link>
              </React.Fragment>
            ))}
          </div>
          <Link to={`/topic/${props?.title}`}>
            <Button className="bg-red-700 w-20 mt-6 justify-center items-center h-8 text-[14px] font-semibold text-white  ml-5 hover:bg-white hover:text-black">
              Đọc
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SliderCard);
