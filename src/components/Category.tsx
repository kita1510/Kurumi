import React, { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import client from "~/configs/client";
import useCategory from "~/hooks/useCategory";
import { Category } from "~/types";

const App = memo(() => {
  const category = useCategory("Action");
  console.log(category);
  const [cateName, setCateName] = useState<Category[]>([]);

  // console.log(cateName);

  async function getCateList() {
    const data = await client.get("/api/categories");
    setCateName(data?.data);
  }

  useEffect(() => {
    getCateList();
  }, []);

  return (
    <div className="flex gap-3 flex-wrap w-60">
      {cateName?.map((c) => {
        return (
          <Link to={{ pathname: `/category/${c?.name.trim()}` }}>
            <button
              className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
              value="Action"
            >
              {c?.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
});

export default App;
