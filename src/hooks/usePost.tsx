import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import supabase from "~/lib/supabase";
import { Author, CategoriesOnPosts, Post, Comment } from "~/types";

export type PostInfo = Post & {
  author: Author;
  comment: Comment[];
  categories: CategoriesOnPosts[];
};

const usePost = (title: string) => {
  const { data: posts } = useQuery<PostInfo>({
    queryKey: ["post"],
    queryFn: async () => {
      const data = await supabase.from("Post").select("*,CategoriesOnPosts(categoryId, postId),Category(name)").eq("title", title).single();
      return data?.data;
    },
  });

  return posts;
};

export default usePost;
