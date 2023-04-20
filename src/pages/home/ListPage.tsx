import React from "react";
import ReadingList from "~/components/reading/ReadingList";
import Sidebar from "~/components/sidebar/Sidebar";

const ListPage = () => {
  return (
    <div className="w-4/5">
      <Sidebar />
      <div className="ml-[100px] ">
        <ReadingList />
      </div>
    </div>
  );
};

export default ListPage;
