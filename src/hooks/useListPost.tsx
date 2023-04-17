import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { CategoriesOnPosts, Category, Post } from "~/types";

export type PostInfo = Post & {
  CategoriesOnPosts: CategoriesOnPosts[];
  Category: Category[];
};

const useListPost = () => {
  const getData = async () => {
    const { data, error } = await supabase
      .from("Post")
      .select("*, CategoriesOnPosts(*),Category(*),PostOnLiked(*)");
    return data;
  };
  const { data: posts } = useQuery<any, any, PostInfo[]>({
    queryKey: ["listPost"],
    queryFn: getData,
  });

  return posts;
};

export default useListPost;
