import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";
import { UserProfile } from "~/components/shared/UserActive";

const useProfiles = () => {
  const profiles = useQuery<UserProfile[]>({
    queryKey: ["profiles"],
    queryFn: async () => {
      const data = await supabase.from("User").select("*,Profile(avatar,bio,follower)");
      return data;
    },
  });
  return profiles;
};

export default useProfiles;
