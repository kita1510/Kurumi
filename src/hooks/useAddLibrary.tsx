import { QueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import SuccessNotify from "~/components/icons/SuccessNotify";
import { useAuthUser } from "~/contexts/AuthContext";
import { useToast } from "~/contexts/ToastContext";
import supabase from "~/lib/supabase";
import { Post } from "~/types";

const useAddLibrary = () => {
  const { changeText, changeToggle } = useToast();
  const { user } = useAuthUser();

  const { mutate } = useMutation({
    mutationFn: addToLibrary,
  });

  async function addToLibrary(post: Post) {
    const req = await supabase.from("PostOnLibrary").insert({ postId: post?.id, userId: user?.id });
    console.log(req);
    if (req?.data) {
      changeToggle(true);
      changeText(<SuccessNotify children={"Đã thêm vào thư viện"} />);
    } else {
      changeToggle(true);
      changeText(<SuccessNotify children={"Đã có trong thư viện"} />);
    }
  }

  return { addToLibrary };
};

export default useAddLibrary;
