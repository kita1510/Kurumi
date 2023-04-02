import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

const Topic = () => {
  return (
    <div className="w-[135px] h-[250px]  gap-2 relative rounded-sm flex flex-col">
      <img
        className="w-full h-[180px] object-cover"
        src="https://i.pinimg.com/564x/92/82/81/9282810f23aece93a266167779750326.jpg"
        alt=""
      />
      <div className="mx-auto text-sm font-semibold">Nino</div>
      <div className="flex justify-between items-center mx-2">
        <div className="flex gap-2 items-center ">
          <AiOutlineHeart size={24} />
          <span className="font-semibold">0</span>
        </div>
        <div>
          <GrAddCircle size={24}/>
        </div>
      </div>
    </div>
  );
};

export default Topic;
