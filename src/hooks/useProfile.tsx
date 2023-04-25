import { PostgrestQueryBuilder } from "@supabase/postgrest-js";
import { QueryClient, useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { Profile } from "~/types";

const useProfile = (userId?: number, name?: string) => {
  const queryClient = new QueryClient();
  const { data: userProfile } = useQuery<any, any, Profile>({
    queryKey: ["profile"],
    queryFn: async () => {
      const profile = await supabase
        .from<any, PostgrestQueryBuilder<any, any>>("Profile")
        .select("*")
        .eq("userId", userId)
        .single();
      if (profile?.status === 1) {
        queryClient.invalidateQueries({ queryKey: ["Profile"] });
      }
      return profile?.data;
    },
  });
  return userProfile;
};

export default useProfile;
