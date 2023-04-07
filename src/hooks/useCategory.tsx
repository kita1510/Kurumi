import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";
import supabase from "~/lib/supabase";

const useCategory = (cateName: string) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await client.get(`/categories/:${cateName}`);
      return data;
    },
  });
  return categories;
};

export default useCategory;
