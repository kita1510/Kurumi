import React, { memo } from "react";
import { Link } from "react-router-dom";

const App = memo(() => {
  const categoryList = [
    { cate: "Harem", bgColor: "bg-red-500", bgHoverColor: "hover:bg-red-800" },
    { cate: "Slice of life", bgColor: "bg-blue-500", bgHoverColor: "hover:bg-blue-800" },
    { cate: "Action", bgColor: "bg-purple-500", bgHoverColor: "hover:bg-purple-800" },
    { cate: "Ecchi", bgColor: "bg-black", bgHoverColor: "hover:bg-slate-700" },
    { cate: "Romance", bgColor: "bg-orange-500", bgHoverColor: "hover:bg-orange-800" },
    { cate: "Drama", bgColor: "bg-yellow-500", bgHoverColor: "hover:bg-yellow-800" },
    { cate: "Adventure", bgColor: "bg-green-500", bgHoverColor: "hover:bg-green-800" },
    { cate: "Music", bgColor: "bg-pink-500", bgHoverColor: "hover:bg-pink-800" },
  ];

  return (
    <div className="flex gap-3 flex-wrap w-60">
      {categoryList.map((c) => (
        <Link to={{ pathname: `/category/${c.cate}` }}>
          <button
            className={`px-4 py-1 rounded-lg text-white font-semibold ${c.bgColor} ${c.bgHoverColor}`}
            value="Action"
          >
            {c.cate}
          </button>
        </Link>
      ))}
    </div>
  );
});

export default App;
