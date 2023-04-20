import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { UserInfo } from "~/types";

const useUsers = () => {
  const { data: users } = useQuery<any, any, UserInfo[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await supabase.from("User").select("*");
      return data;
    },
  });
  return users;
};

export default useUsers;
