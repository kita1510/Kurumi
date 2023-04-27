import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Link } from "react-router-dom";
import useAddLibrary from "~/hooks/useAddLibrary";
import useLikePost from "~/hooks/useLikePost";
import usePosts from "~/hooks/usePosts";
import CategoryPage from "~/pages/home/CategoryPage";
import Topic from "../shared/Card";
import CardSkeleton from "../skeletons/CardSkeleton";

const Pagination = () => {
  const [isActive, setIsActive] = useState(false);
  const { posts, isLoading } = usePosts();

  const queryClient = useQueryClient();
  const { mutateLibrary } = useAddLibrary();
  const { likePost, unlikePost } = useLikePost();

  const active = "bg-red-500";
  console.log(isLoading);

  return (
    <div className="flex justify-center gap-10 mt-5 flex-col w-[70%]">
      <div className="flex gap-8 flex-wrap">
        {posts?.map((p) =>
          isLoading ? (
            <div className="flex flex-col" key={p?.id}>
              <CategoryPage />
            </div>
          ) : (
            <div className="flex flex-col" key={p?.id}>
              <Link to={{ pathname: `/topic/${p?.title}` }} key={p?.id}>
                <Topic key={p?.id} coverPage={p?.coverPage} title={p?.title} />
              </Link>
              <div className="flex justify-between items-center mx-3">
                <div className="flex gap-2 items-center ">
                  {/* <CardSkeleton /> */}
                  <AiOutlineHeart
                    cursor={"pointer"}
                    size={24}
                    onClick={() =>
                      likePost(p, {
                        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
                      })
                    }
                  />
                  <span className="font-semibold">{p?.PostOnLiked?.length}</span>
                </div>
                <div>
                  <GrAddCircle
                    cursor={"pointer"}
                    size={24}
                    onClick={() => {
                      mutateLibrary(p);
                    }}
                  />
                </div>
              </div>
            </div>
          ),
        )}
      </div>
      <div className="flex gap-3 justify-center">
        <button className={`w-10 h-10 font-semibold text-white bg-red-500 rounded-xl`}>1</button>
        <button className={`w-10 h-10 font-semibold text-black border-2 border-red-500 rounded-xl`}>
          2
        </button>
        <button
          className={`w-10 h-10 font-semibold text-black border-2 border-red-500  rounded-xl`}
        >
          3
        </button>
        <button
          className={`w-10 h-10 font-semibold text-black border-2 border-red-500  rounded-xl`}
        >
          4
        </button>
      </div>
    </div>
  );
};

export default Pagination;
