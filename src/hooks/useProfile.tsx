import { useQuery } from "@tanstack/react-query";
import supabase from "~/lib/supabase";

const useProfile = (userId: number) => {
  const { data: userProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const profile = await supabase.from("Profile").select("*").eq("userId", userId).single();
      return profile?.data;
    },
  });
  return userProfile;
};

export default useProfile;
