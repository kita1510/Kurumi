import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import SuccessNotify from "~/components/icons/SuccessNotify";
import Topic from "~/components/shared/Topic";
import Sidebar from "~/components/sidebar/Sidebar";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import { useToast } from "~/contexts/ToastContext";
import supabase from "~/lib/supabase";
import { Author, CategoriesOnPosts, Category, Post } from "~/types";

export type CategoryOnList = Category & {
  CategoriesOnPosts: [CategoriesOnPosts];
  Post: [Post];
};

export type PostOnLibrary = {
  postId: Pick<Post, "id">;
  userId: Pick<Author, "id">;
};

const CategoryPage = () => {
  const { name } = useParams();
  const { user } = useContext<AuthProps>(AuthContext);
  const { changeText, changeToggle } = useToast();
  // const [listTopic, setListTopic] = useState<CategoryOnList>();
  const ac = new AbortController();
  // ac.abort();

  console.log(ac.abort());

  async function getListTopic(signal?: AbortSignal) {
    const { data } = await supabase
      .from("Category")
      .select("*,CategoriesOnPosts(*),Post(*)")
      .eq("name", name)
      .single();
    console.log(signal);
    return data;
  }

  const { data: listTopic } = useQuery<any, any, CategoryOnList>({
    queryKey: ["listTopic"],
    queryFn: ({ signal }) => {
      return getListTopic(signal);
    },
  });

  console.log(listTopic);

  async function addToLibrary(l: Post) {
    const req = await supabase.from("PostOnLibrary").insert({ postId: l?.id, userId: user?.id });
    console.log(req);
    if (req?.data) {
      changeToggle(true);
      changeText(<SuccessNotify children={"Đã thêm vào thư viện"} />);
    } else {
      changeText(<SuccessNotify children={"Đã có trong thư viện"} />);
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

  // console.log(library);

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
          {listTopic?.Post?.map((l) => (
            <div>
              <Link to={{ pathname: `/topic/${l?.title}` }} state={l}>
                <Topic key={listTopic?.id} title={l?.title} coverPage={l?.coverPage} />
              </Link>

              <div className="flex justify-between items-center mx-2">
                <div className="flex gap-2 items-center ">
                  <AiOutlineHeart cursor={"pointer"} size={24} />
                  <span className="font-semibold">0</span>
                </div>
                <div>
                  <GrAddCircle cursor={"pointer"} size={24} onClick={() => addToLibrary(l)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
