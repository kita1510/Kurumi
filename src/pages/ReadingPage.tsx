import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Reading from "~/components/reading/Reading";
import ScrollOnTop from "~/components/shared/ScrollOnTop";
import Sidebar from "~/components/sidebar/Sidebar";
import usePost from "~/hooks/usePost";

const ReadingPage = () => {
  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const param = useParams();
  console.log(param);

  const post = usePost(param?.title);

  console.log(post);

  useEffect(() => {
    handleMoveToTop();
    return () => {};
  }, []);

  return (
    <div>
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-[200px] w-3/5">
        <Reading title={post?.title} content={post?.content} />
        <ScrollOnTop />
      </div>
    </div>
  );
};

export default ReadingPage;
