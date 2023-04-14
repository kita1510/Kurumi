import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import { Author, CategoriesOnPosts, Comment, Post } from "~/types";

export type PostInfo = Post & {
  author: Author;
  comment: Comment[];
  categories: CategoriesOnPosts[];
};

const usePosts = () => {
  const { data: posts } = useQuery<PostInfo[]>({
    queryKey: ["posts"],
    queryFn: async ({ signal }) => {
      const data = await client.get("/api/posts", {
        signal,
      });
      return data?.data;
    },
  });

  return posts;
};

export default usePosts;
