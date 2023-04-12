import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Topic from "~/components/shared/Topic";
import Sidebar from "~/components/sidebar/Sidebar";
import client from "~/configs/client";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import { useToast } from "~/contexts/ToastContext";
import supabase from "~/lib/supabase";
import { Author, Category, Post } from "~/types";

export type CategoryOnList = {
  categoryId: number;
  postId: number;
  category: Category;
  post: Post;
};

export type PostOnLibrary = {
  postId: Pick<Post, "id">;
  userId: Pick<Author, "id">;
};

const CategoryPage = () => {
  const { name } = useParams();
  const { user } = useContext<AuthProps>(AuthContext);
  const { changeText, changeToggle } = useToast();

  const controller = new AbortController();
  const [listTopic, setListTopic] = useState<CategoryOnList[]>([]);

  async function getListTopic() {
    const data = await client.get(`/api/categories/${name}`);
    setListTopic(data?.data);
  }

  async function addToLibrary(l: CategoryOnList) {
    console.log(l);
    const req = await supabase.from("PostOnLibrary").insert({ postId: l.postId, userId: user?.id });
    console.log(req?.data)
    if (req?.data) {
      changeToggle(true);
      changeText(<div className="font-semibold">Đã thêm vào thư viện</div>);
    }
  }
  async function getDataInLibrary() {
    const { data } = await supabase.from("PostOnLibrary").select("*").eq("userId", user?.id);
    return data;
  }

  const { data: library } = useQuery({
    queryKey: ["library"],
    queryFn: async () => getDataInLibrary(),
  });

  console.log(library);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    getListTopic();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="flex ">
      <div className="fixed left-0 top-0">
        <Sidebar />
      </div>
      <div className="ml-44 mt-14 flex gap-5 flex-col ">
        <div className="flex items-center gap-2">
          <Link to="/">
            <button className="font-semibold hover:text-red-500 flex items-center gap-2">
              <HiHome />
              Trang chủ /
            </button>
          </Link>
          <button className="font-semibold hover:text-red-500">Thể loại</button>/
          <button className="font-semibold hover:text-red-500">{name}</button>/
        </div>
        <div className="text-xl font-normal uppercase">Danh sách Topic thuộc thể loại : {name}</div>
        <div className="flex gap-10 mt-5 flex-wrap">
          {listTopic.map((l) => (
            <div>
              <Link to={{ pathname: `/topic/${l?.post?.title}` }} state={l}>
                <Topic key={l?.categoryId} title={l?.post?.title} coverPage={l?.post?.coverPage} />
              </Link>

              <div className="flex justify-between items-center mx-2">
                <div className="flex gap-2 items-center ">
                  <AiOutlineHeart cursor={"pointer"} size={24} />
                  <span className="font-semibold">0</span>
                </div>
                {library
                  ?.filter((i) => {
                    return i?.postId === l?.postId;
                  })
                  .map((i) => (
                    <div>
                      <GrAddCircle cursor={"pointer"} size={24} onClick={() => addToLibrary(l)} />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
