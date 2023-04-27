import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { UserInfo } from "~/hooks/useUser";

const useUsers = () => {
  const { data: users, isLoading } = useQuery<any, any, UserInfo[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data, status } = await supabase.from("User").select("*, Profile!inner(*)");
      return data;
    },
  });
  return { users, isLoading };
};

export default useUsers;
