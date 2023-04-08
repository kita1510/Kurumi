import React, { useState } from "react";
import { Link } from "react-router-dom";
import usePosts from "~/hooks/usePosts";
import Topic from "../shared/Topic";

const PaginationPage = () => {
  const [isActive, setIsActive] = useState(false);
  const posts = usePosts();

  return (
    <div className="flex justify-center gap-10 mt-5 flex-col w-[70%]">
      <div className="flex gap-10 flex-wrap">
        {posts?.map((p) => (
          <Link to={{ pathname: `/topic/${p?.title}` }}>
            <Topic key={p?.id} coverPage={p?.coverPage} title={p?.title} />
          </Link>
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

export default PaginationPage;
