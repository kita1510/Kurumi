import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { CategoriesOnPosts, Post, Category } from "~/types";

export type PostInfo = Post & {
  CategoriesOnPosts: CategoriesOnPosts[];
  Category: Omit<Category, "id">[];
};
const usePost = (title: string) => {
  const posts = useQuery<PostInfo>({
    queryKey: ["post"],
    queryFn: async () => {
      const res = await supabase
        .from("Post")
        .select("*,CategoriesOnPosts(categoryId, postId),Category(*)")
        .eq("title", title)
        .single();
      return res?.data;
    },
  });

  return posts?.data;
};

export default usePost;
