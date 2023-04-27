import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { Author, CategoriesOnPosts, Category, Comment, LikedPost, Post } from "~/types";

export type PostInfo = Post & {
  author: [Author];
  comment: [Comment];
  Category: [Category];
  CategoryOnPost: [CategoriesOnPosts];
  PostOnLiked: [LikedPost];
};

const usePosts = () => {
  const { data: posts, isLoading } = useQuery<any, any, [PostInfo]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data, status } = await supabase
        .from("Post")
        .select("*,CategoriesOnPosts(*),Category(*),PostOnLiked(*)");
      return data;
    },
  });

  return {posts, isLoading};
};

export default usePosts;
