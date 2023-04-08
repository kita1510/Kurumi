import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import { Comment } from "~/types";

const useComment = () => {
  const { data: comments } = useQuery<Comment[]>({
    queryKey: ["comments"],
    queryFn: async () => {
      const data = await client.get("/api/comments");
      return data?.data;
    },
  });
  return comments;
};

export default useComment;
