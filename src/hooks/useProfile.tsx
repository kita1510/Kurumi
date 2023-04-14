import { PostgrestQueryBuilder } from "@supabase/postgrest-js";
import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { Profile } from "~/types";

const useProfile = (userId?: number) => {
  const { data: userProfile } = useQuery<any, any, Profile>({
    queryKey: ["profile"],
    queryFn: async () => {
      const profile = await supabase
        .from<any, PostgrestQueryBuilder<any, any>>("Profile")
        .select("*")
        .eq("userId", userId)
        .single();
      return profile?.data;
    },
  });
  return userProfile;
};

export default useProfile;
