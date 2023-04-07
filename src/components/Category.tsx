import React, { useState } from "react";
import useCategory from "~/hooks/useCategory";

const App = () => {
  const category = useCategory("Action");
  const [cate, setCate] = useState("");

  // console.log(cate);

  return (
    <div className="flex gap-3 flex-wrap w-60">
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
        value="Action"
      >
        Action
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
        value="Comedy"
      >
        Comedy
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
      >
        Romance
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
      >
        War
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
      >
        Slice of Life
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
      >
        Science
      </button>
      <button
        className="px-4 py-1 rounded-lg text-white font-semibold bg-red-500"
        onClick={(e) => setCate(e.currentTarget.value)}
      >
        Harem
      </button>
    </div>
  );
};

export default App;
