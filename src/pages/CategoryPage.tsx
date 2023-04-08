import React, { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import Topic from "~/components/shared/Topic";
import Sidebar from "~/components/sidebar/Sidebar";
import client from "~/configs/client";
import { Category, Post } from "~/types";

export type CategoryOnList = {
  categoryId: number;
  postId: number;
  category: Category;
  post: Post;
};

const CategoryPage = () => {
  const { name } = useParams();

  const controller = new AbortController();
  const [listTopic, setListTopic] = useState<CategoryOnList[]>([]);

  async function getListTopic() {
    const data = await client.get(`/api/categories/${name}`);
    setListTopic(data?.data);
  }

  useEffect(() => {
    getListTopic();

    return () => {
      controller.abort();
    };
  }, []);

  console.log(listTopic);
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
            <Link to={{ pathname: `/topic/${l?.post?.title}` }} state={l}>
              <Topic key={l?.categoryId} title={l?.post?.title} coverPage={l?.post?.coverPage} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
