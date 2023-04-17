import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthUser } from "~/contexts/AuthContext";
import supabase from "~/lib/supabase";
import { Post } from "~/types";

const useLikePost = () => {
  const { user } = useAuthUser();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: likeAPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listTopic"] });
    },
  });
  async function likeAPost(post: Post) {
    const { data } = await supabase
      .from("PostOnLiked")
      .insert({ postId: post?.id, userId: user?.id });
  }
  return { likeAPost, mutate };
};

export default useLikePost;
