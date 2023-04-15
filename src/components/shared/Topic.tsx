import React from "react";
import { Post } from "~/types";

const Topic = ({ title, coverPage }: Pick<Post, "title" | "coverPage">) => {
  return (
    <div className="w-[140px] min-h-[230px]  gap-2 relative rounded-sm flex flex-col cursor-pointer">
      <img
        className="w-full min-h-[180px] object-cover"
        src={coverPage || "https://i.pinimg.com/564x/92/82/81/9282810f23aece93a266167779750326.jpg"}
        alt=""
      />
      <div className="mx-auto text-sm text-center font-semibold h-[50px]">{title}</div>
    </div>
  );
};

export default Topic;
