import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { CategoriesOnPosts, Category, LikedPost, Post } from "~/types";

export type PostInfo = Post & {
  CategoriesOnPosts: [CategoriesOnPosts];
  Category: [Category];
  PostOnLiked: [LikedPost];
};

const useListPost = () => {
  const getData = async () => {
    const { data, error } = await supabase
      .from("Post")
      .select("*, CategoriesOnPosts(*),Category(*),PostOnLiked!inner(*)");
    // .limit(8)
    // .order("count(userId)", { ascending: false, foreignTable: "PostOnLiked" });
    return data;
  };
  const { data: posts } = useQuery<any, any, PostInfo[]>({
    queryKey: ["listPost"],
    queryFn: getData,
  });

  return posts;
};

export default useListPost;
