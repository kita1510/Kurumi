import { QueryClient, useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { AuthUser, Follow, Profile } from "~/types";

export type UserInfo = AuthUser & {
  Profile: [Profile];
  Follow: Follow[];
};

const useUser = (name?: string) => {
  const ac = new AbortController();
  ac.abort();
  const { data: u, status } = useQuery<any, any, UserInfo>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase
        .from<"User", any>("User")
        .select("*,Profile!inner(*)")
        .eq("name", name)
        .single();
      return data;
    },
    cacheTime: 5000,
    staleTime: 1000,
  });
  return { u, status };
};

export default useUser;
