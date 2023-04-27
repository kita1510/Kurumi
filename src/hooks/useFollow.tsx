import { QueryClient, useMutation } from "@tanstack/react-query";
import React from "react";
import SuccessNotify from "~/components/icons/SuccessNotify";
import { useAuthUser } from "~/contexts/AuthContext";
import { useToast } from "~/contexts/ToastContext";
import supabase from "~/lib/supabase";
import { Post, Profile } from "~/types";

const useFollow = () => {
  const { changeText, changeToggle } = useToast();
  const { user } = useAuthUser();
  const queryClient = new QueryClient();

  const { mutate: mutateFollow } = useMutation({
    mutationFn: handleFollow,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Profile"] });
    },
  });

  async function handleFollow(profile: Profile) {
    const req = await supabase.from("Follow").insert({ profileId: profile?.id, userId: user?.id });
    console.log(req);
    if (req?.status) {
      changeToggle(true);
      changeText(<SuccessNotify children={"Đã thêm vào thư viện"} />);
    }
  }

  return { mutateFollow };
};

export default useFollow;
