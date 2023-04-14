import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { UserProfile } from "~/components/shared/UserItem";

const useProfiles = () => {
  const profiles = useQuery<any, any, UserProfile[]>({
    queryKey: ["profiles"],
    queryFn: async () => {
      const { data } = await supabase.from("User").select("*");
      return data;
    },
  });
  return profiles;
};

export default useProfiles;
