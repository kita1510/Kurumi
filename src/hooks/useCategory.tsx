import { useQuery } from "@tanstack/react-query";
import client from "~/configs/client";

const useCategory = (cateName: string) => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const data = await client.get(`/api/categories/${cateName}`);
      return data?.data;
    },
  });
  return categories;
};

export default useCategory;
