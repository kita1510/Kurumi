import React, { memo } from "react";
import { Link } from "react-router-dom";

const App = memo(() => {
  const categoryList = [
    {
      cate: "Harem",
      color: "text-red-500",
      bgColor: "bg-red-500",
      bgHoverColor: "hover:bg-red-500",
      borderColor: "border-red-500",
    },
    {
      cate: "Slice of life",
      color: "text-red-500",
      bgColor: "blue-500",
      bgHoverColor: "hover:bg-blue-500",
      borderColor: "border-blue-500",
    },
    {
      cate: "Action",
      color: "text-red-500",
      bgColor: "purple-500",
      bgHoverColor: "hover:bg-purple-500",
      borderColor: "border-purple-500",
    },
    {
      cate: "Ecchi",
      color: "text-red-500",
      bgColor: "black",
      bgHoverColor: "hover:bg-black",
      borderColor: "border-black",
    },
    {
      cate: "Romance",
      color: "text-red-500",
      bgColor: "orange-500",
      bgHoverColor: "hover:bg-orange-500",
      borderColor: "border-orange-500",
    },
    {
      cate: "Drama",
      color: "text-red-500",
      bgColor: "yellow-500",
      bgHoverColor: "hover:bg-yellow-500",
      borderColor: "border-yellow-500",
    },
    {
      cate: "Adventure",
      color: "text-green-800",
      bgColor: "green-500",
      bgHoverColor: "hover:bg-green-500",
      borderColor: "border-green-500",
    },
    {
      cate: "Music",
      color: "text-pink-800",
      bgColor: "pink-500",
      bgHoverColor: "hover:bg-pink-500",
      borderColor: "border-pink-500",
    },
  ];

  console.log(`text-${categoryList[0].bgColor}`);

  return (
    <div className="flex gap-3 flex-wrap w-[250px] bg-white p-4 flex-col items-center font-monospace">
      <div className="font-semibold text-lg">DANH SÁCH THỂ LOẠI</div>
      {categoryList.map((c) => (
        <Link to={{ pathname: `/category/${c.cate}` }}>
          <button
            className={`w-40 py-1 text-sm uppercase rounded-lg hover:text-white ${c.borderColor} border-2 font-semibold text-black transparent ${c.bgHoverColor}`}
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
