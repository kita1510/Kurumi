import React, { FC } from "react";
import RandomTopic from "~/components/patials/RandomTopic";
import RankingCard from "~/components/shared/RankingCard";
import Tree from "~/components/shared/Tree";
import Sidebar from "~/components/patials/Sidebar";
import useListPost, { PostInfo } from "~/hooks/useListPost";

const Ranking = () => {
  const listPost = useListPost();
  console.log(listPost);

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="ml-44 mt-14 flex gap-5 flex-col ">
        <Tree rootName="Bảng xếp hạng" />
        <div className="text-xl font-normal uppercase">BẢNG XẾP HẠNG CÁC BÀI VIẾT</div>
        {listPost
          ?.sort((a, b) => b?.PostOnLiked?.length - a?.PostOnLiked?.length)
          .map((l, index) => {
            return (
              <React.Fragment key={l?.id}>
                <RankingCard props={l} index={index}></RankingCard>
              </React.Fragment>
            );
          })}
      </div>
      <div className="absolute right-40 top-[9.5rem]">
        <RandomTopic />
      </div>
    </div>
  );
};

export default Ranking;
