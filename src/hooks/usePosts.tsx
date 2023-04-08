import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import { Author, Comment, Post } from "~/types";

export type PostInfo = Post & {
  author: Author;
  comment: Comment[];
};

const usePosts = () => {
  const { data: posts } = useQuery<PostInfo[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const data = await client.get("/api/posts");
      return data?.data;
    },
  });

  return posts;
};

export default usePosts;
