import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuthUser } from "~/contexts/AuthContext";
import supabase from "~/lib/supabase";
import { Post } from "~/types";

const useLikePost = () => {
  const { user } = useAuthUser();
  const queryClient = useQueryClient();

  const { mutate: likePost } = useMutation({
    mutationFn: likeAPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listTopic"] });
    },
  });

  const { mutate: unlikePost } = useMutation({
    mutationFn: unLikeAPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["listTopic"] });
    },
  });
  async function likeAPost(post: Post) {
    const { data } = await supabase
      .from("PostOnLiked")
      .insert({ postId: post?.id, userId: user?.id });
  }

  async function unLikeAPost(post: Post) {
    const { data } = await supabase.from("PostOnLiked").delete().eq("postId", post?.id);
  }
  return { likePost, unlikePost };
};

export default useLikePost;
