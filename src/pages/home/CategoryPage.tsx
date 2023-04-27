import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import { Link, useParams } from "react-router-dom";
import Topic from "~/components/shared/Card";
import Sidebar from "~/components/patials/Sidebar";
import { useAuthUser } from "~/contexts/AuthContext";
import supabase from "~/lib/supabase";
import { Author, CategoriesOnPosts, Category, Post } from "~/types";
import "swiper/css";
import "swiper/css/pagination";
import useAddLibrary from "~/hooks/useAddLibrary";
import useLikePost from "~/hooks/useLikePost";
import { useToast } from "~/contexts/ToastContext";
import SuccessNotify from "~/components/icons/SuccessNotify";
import Tree from "~/components/shared/Tree";

export type CategoryOnList = Post & {
  CategoriesOnPosts: [CategoriesOnPosts];
  Post: [Category];
  PostOnLiked: [PostLiked];
};

export type PostLiked = {
  postId: number;
  userId: number;
};

const CategoryPage = () => {
  const { name } = useParams();
  const { user } = useAuthUser();
  const { mutateLibrary } = useAddLibrary();
  const { likePost, unlikePost } = useLikePost();
  const queryClient = useQueryClient();
  const { changeToggle, changeText } = useToast();

  async function getListTopic() {
    const { data } = await supabase
      .from("Post")
      .select("*,CategoriesOnPosts(*),Category!inner(*),PostOnLiked(*)")
      .eq("Category.name", name);
    // console.log(signal);
    return data;
  }

  const { data: listTopic } = useQuery<any, any, CategoryOnList[]>({
    queryKey: ["listTopic"],
    queryFn: () => {
      return getListTopic();
    },
  });

  console.log(listTopic);

  // useEffect(() => {
  //   getListTopic();
  // }, [listTopic, user]);

  // console.log(listQuery);
  // console.log(like);

  // console.log(listTopic);

  // async function getDataInLibrary() {
  //   const { data } = await supabase.from("PostOnLibrary").select("*").eq("userId", user?.id);
  //   return data;
  // }

  // const { data: library } = useQuery({
  //   queryKey: ["library"],
  //   queryFn: async () => getDataInLibrary(),
  // });

  // console.log(library);

  return (
    <div className="flex ">
      <Sidebar />
      <div className="ml-44 mt-14 flex gap-5 flex-col ">
        <Tree name={name} rootName={"Thể loại"} className="px-0"></Tree>
        <div className="text-xl font-normal uppercase">Danh sách Topic thuộc thể loại : {name}</div>
        <div className="flex gap-10 mt-5 flex-wrap">
          {listTopic?.map((l) => {
            return (
              <div key={l?.id}>
                <Link to={{ pathname: `/topic/${l?.title}` }} state={l}>
                  <Topic key={l?.id} title={l?.title} coverPage={l?.coverPage} />
                </Link>

                <div className="flex justify-between items-center mx-2">
                  <div className="flex gap-2 items-center">
                    {/* {l?.PostOnLiked?.map((i) => {
                      if (i?.userId !== user?.id)
                      return ( */}
                    <AiOutlineHeart
                      cursor={"pointer"}
                      size={24}
                      onClick={() => {
                        likePost(l, {
                          onSuccess: () => {
                            changeToggle(true);
                            changeText(<SuccessNotify text="Đã thích bài viết"></SuccessNotify>);
                          },
                        });
                      }}
                      // }
                    />
                    {/* );
                       else {
                        return <AiFillHeart cursor={"pointer"} size={24}></AiFillHeart>;
                      }
                    })} */}

                    <span className="font-semibold">{l?.PostOnLiked?.length}</span>
                  </div>

                  <div>
                    <GrAddCircle cursor={"pointer"} size={24} onClick={() => mutateLibrary(l)} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
