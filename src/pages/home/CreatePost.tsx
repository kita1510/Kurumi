import React from "react";
import { createReactEditorJS } from "react-editor-js";
import ReadingList from "~/components/reading/ReadingList";
import Sidebar from "~/components/sidebar/Sidebar";

const ReactEditTor = createReactEditorJS();

const CreatePost = () => {
  return (
    <div className="w-4/5">
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-[100px] ">
      </div>
    </div>
  );
};

export default CreatePost;
