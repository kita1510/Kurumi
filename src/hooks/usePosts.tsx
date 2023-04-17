import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { Author, CategoriesOnPosts, Comment, LikedPost, Post } from "~/types";

export type PostInfo = Post & {
  author: Author;
  comment: Comment[];
  categories: CategoriesOnPosts[];
  PostOnLiked: [LikedPost];
};

const usePosts = () => {
  const { data: posts } = useQuery<any, any, PostInfo[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await supabase
        .from("Post")
        .select("*,CategoriesOnPosts(*),Category(*),PostOnLiked(*)");
      // console.log(signal);
      return data;
    },
  });

  return posts;
};

export default usePosts;
