import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { UserInfo } from "~/hooks/useUser";

const useUsers = () => {
  const { data: users } = useQuery<any, any, UserInfo[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await supabase.from("User").select("*, Profile!inner(*)");
      return data;
    },
  });
  return users;
};

export default useUsers;
