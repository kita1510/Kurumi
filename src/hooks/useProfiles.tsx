import React from "react";
import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import supabase from "~/lib/supabase";
import { UserProfile } from "~/components/UserActive";

const useProfiles = () => {
  const profiles = useQuery<UserProfile[]>({
    queryKey: ["profiles"],
    queryFn: async () => {
      const data = await supabase.from("User").select("*,Profile(avatar,bio,follower)");
      return data;
    },
  });
  return profiles;
};

export default useProfiles;
