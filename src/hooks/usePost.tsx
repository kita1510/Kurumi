import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { PostLiked } from "~/pages/home/CategoryPage";
import { CategoriesOnPosts, Post, Category } from "~/types";

export type PostInfo = Post & {
  CategoriesOnPosts: CategoriesOnPosts[];
  Category: Category[];
  PostOnLiked: [PostLiked];
};
const usePost = (title?: string) => {
  const ac = new AbortController();
  ac.abort();
  const posts = useQuery<any, any, PostInfo>({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await supabase
        .from("Post")
        .select("*,CategoriesOnPosts(*),Category(*),PostOnLiked(*)")
        .eq("title", title)
        .single();
      // .abortSignal(ac.signal)
      // .then((res) => res.data);
      return res?.data;
    },
  });

  return posts?.data;
};

export default usePost;
