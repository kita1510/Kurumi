import { QueryClient, useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";

const useUser = (name: string) => {
  const client = new QueryClient();
  const { data: u, status } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await supabase.from("User").select("*, Post(*)");
      return data;
    },
    cacheTime: 5000,
  });
  client.invalidateQueries({ queryKey: ["User"], stale: true });
  return { u, status };
};

export default useUser;
