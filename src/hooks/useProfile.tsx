import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import supabase from "~/lib/supabase";
import { Profile } from "~/types";
import { PostgrestBuilder, PostgrestFilterBuilder } from "@supabase/postgrest-js";

const useProfile = () => {
  const { user } = useContext<AuthProps>(AuthContext);

  const { data: userProfile } = useQuery<{ data: Profile }>({
    queryKey: ["profile"],
    queryFn: async () => {
      const profile = await supabase
        .from("Profile")
        .select("*")
        .single()
        .eq("userId", user?.id);
      return profile;
    },
  });
  return userProfile?.data;
};

export default useProfile;
