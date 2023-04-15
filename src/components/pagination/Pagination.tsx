import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import usePosts from "~/hooks/usePosts";
import Topic from "../shared/Topic";

const Pagination = () => {
  const [isActive, setIsActive] = useState(false);
  const posts = usePosts();

  return (
    <div className="flex justify-center gap-10 mt-5 flex-col w-[70%]">
      <div className="flex gap-10 flex-wrap">
        {posts?.map((p) => (
          <div className="flex flex-col" key={p?.id}>
            <Link to={{ pathname: `/topic/${p?.title}` }} key={p?.id}>
              <Topic key={p?.id} coverPage={p?.coverPage} title={p?.title} />
            </Link>
            <div className="flex justify-between items-center mx-3">
              <div className="flex gap-2 items-center ">
                <AiOutlineHeart cursor={"pointer"} size={24} />
                <span className="font-semibold">0</span>
              </div>
              <div>
                <GrAddCircle cursor={"pointer"} size={24} />
              </div>
            </div>
          </div>
        ))}
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

export default Pagination;
