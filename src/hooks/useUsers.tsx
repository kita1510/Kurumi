import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import { UserInfo } from "~/types";

const useUsers = () => {
  const { data: users } = useQuery<UserInfo[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await client.get("/api/users");
      return data;
    },
  });
  return users;
};

export default useUsers;
