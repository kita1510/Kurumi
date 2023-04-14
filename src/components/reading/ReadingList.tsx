import React from "react";
import ReadingCard from "./ReadingCard";

const ReadingList = () => {
  return (
    <div className="flex p-10 gap-10 flex-wrap ">
      <ReadingCard></ReadingCard>
      <ReadingCard></ReadingCard>
      <ReadingCard></ReadingCard>
      <ReadingCard></ReadingCard>
      <ReadingCard></ReadingCard>
    </div>
  );
};

export default ReadingList;
