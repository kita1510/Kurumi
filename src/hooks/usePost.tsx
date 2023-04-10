import { PostgrestSingleResponse } from "@supabase/postgrest-js";
import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { CategoriesOnPosts, Post, Category } from "~/types";

export type PostInfo = Post & {
  CategoriesOnPosts: CategoriesOnPosts[];
  Category: Omit<Category, "id">[];
};

const usePost = (title: string) => {
  const { data: posts } = useQuery<PostInfo>({
    queryKey: ["post"],
    queryFn: async () => {
      const { data } = await supabase
        .from("Post")
        .select("*,CategoriesOnPosts(categoryId, postId),Category(name)")
        .eq("title", title)
        .single();
      return data?.data;
    },
  });

  return posts;
};

export default usePost;
