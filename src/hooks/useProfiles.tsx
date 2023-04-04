import React from "react";
import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import supabase from "~/lib/supabase";

const useProfiles = () => {
  const profiles = useQuery({
    queryKey: ["profiles"],
    queryFn: async () => {
      const data = await supabase.from("User").select("*,Profile(avatar)");
      return data;
    },
  });
  return profiles;
};

export default useProfiles;
