import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Topic from "~/components/shared/Topic";
import Sidebar from "~/components/sidebar/Sidebar";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import supabase from "~/lib/supabase";

const Library = () => {
  const { user } = useContext<AuthProps>(AuthContext);

  const posts = useQuery({
    queryKey: ["postOnLibrary"],
    queryFn: async () => {
      const res = await supabase
        .from("Post")
        .select("*, PostOnLibrary!inner(postId,userId)")
        .eq("PostOnLibrary.userId", user?.id);
      return res?.data;
    },
  });

  console.log(posts?.data?.length === 0);
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-44 mt-14 flex gap-5 flex-col ">
        <div className="flex items-center gap-2">
          <Link to="/">
            <button className="font-semibold hover:text-red-500 flex items-center gap-2">
              <HiHome />
              Trang chủ /
            </button>
          </Link>
          <button className="font-semibold hover:text-red-500">Thư viện</button>/
        </div>

        <div>
          <div className="text-xl font-normal uppercase">Thư viện của bạn</div>
          {posts?.data?.length === 0 && (
            <div className="w-96 mt-10 mr-10 font-semibold">Thư viện đang trống</div>
          )}
          {!user && (
            <div className="w-96 mt-10 mr-10 font-semibold flex gap-2">
              <Link to={"/login"}>
                <div className="text-red-500 font-bold hover:text-red-800">Đăng nhập </div>
              </Link>
              để thêm vào thư viện
            </div>
          )}
          <div className="flex gap-10 mt-5 flex-wrap">
            {posts?.data?.map((l) => (
              <div>
                <Link to={`/topic/${l?.title}`}>
                  <Topic key={l?.categoryId} title={l?.title} coverPage={l?.coverPage} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
