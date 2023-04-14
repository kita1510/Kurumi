import { PostgrestFilterBuilder } from "@supabase/postgrest-js";
import { QueryClient, useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { AuthUser } from "~/types";

const useUser = (name?: string) => {
  const client = new QueryClient();
  const ac = new AbortController();
  ac.abort();
  const { data: u, status } = useQuery<any, any, AuthUser>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase
        .from<"User", any>("User")
        .select("*")
        .eq("name", name)
        .single();
      return data;
    },
    cacheTime: 5000,
    staleTime: 1000,
  });
  client.invalidateQueries({ queryKey: ["User"], stale: true });
  return { u, status };
};

export default useUser;
