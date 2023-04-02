import React from "react";
import Topic from "./Topic";

const PaginationPage = () => {
  return (
    <div>
      <div className="flex gap-10">
        <Topic></Topic>
        <Topic></Topic>
        <Topic></Topic>
        <Topic></Topic>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default PaginationPage;
