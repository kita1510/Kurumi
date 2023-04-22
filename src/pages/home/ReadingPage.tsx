import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Reading from "~/components/reading/Reading";
import ScrollOnTop from "~/components/shared/ScrollOnTop";
import Sidebar from "~/components/patials/Sidebar";
import usePost from "~/hooks/usePost";
import supabase from "~/lib/supabase";
import { Author } from "~/types";

const ReadingPage = () => {
  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    handleMoveToTop();
    return () => {};
  }, []);

  const param = useParams();
  // console.log(param);

  const post = usePost(param?.title);

  // console.log(post);
  // console.log(post?.authorId)
  const { data: author } = useQuery<any, any, Author>({
    queryKey: ["authorOfPost"],
    queryFn: async () => {
      const res = await supabase.from("User").select("*").eq("id", post?.authorId).single();
      // .abortSignal(ac.signal)
      // .then((res) => res.data);
      return res?.data;
    },
  });

  console.log(post?.createdAt);

  return (
    <div>
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-[200px] w-3/5">
        <Reading
          title={post?.title}
          content={post?.content}
          createdAt={post?.createdAt}
          name={author?.name}
        />
        <ScrollOnTop />
      </div>
    </div>
  );
};

export default ReadingPage;
