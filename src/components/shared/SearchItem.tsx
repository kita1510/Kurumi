import React from "react";
import { Author } from "~/types";
import Avatar from "./Avatar";

const SearchItem = ({ name }: Pick<Author, "name">) => {
  return (
    <div className="w-full h-20 px-8 py-[0.3px] hover:bg-slate-100 items-center flex gap-3">
      <Avatar
        className="w-14 h-14 rounded-full"
        src="https://i.truyenvua.com/ebook/190x247/ta-tung-la-thap-vuong_1669291559.jpg?gt=hdfgdfg&mobile=2"
      />
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default SearchItem;
