import { useQuery } from "@tanstack/react-query";
import React, { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import supabase from "~/lib/supabase";
import { Author } from "~/types";
import SearchItem from "./shared/SearchItem";

const SearchTab = () => {
  const [result, setResult] = useState("");
  const [listUser, setListUser] = useState<Author[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };
  const searchRef = useRef<HTMLInputElement>(null);
  const handleDelete = () => {
    setResult("");
    searchRef.current?.focus();
  };

  async function getUser() {
    const { data: user } = await supabase
      .from<any, any>("User")
      .select("*")
      .textSearch("name", `${result}`);
    setListUser(user);
  }

  useEffect(() => {
    getUser();
  }, [result]);

  console.log(listUser);
  return (
    <div className="w-[480px] h-[800px] z-[99999] fixed ml-[100px] rounded-br-3xl rounded-tr-3xl border-black border-r-2 bg-white">
      <div className="w-full h-1/4 border-b-2 border-b-black">
        <div className="pl-6 pt-8 text-2xl font-semibold">Tìm kiếm</div>
        <div className="w-11/12 h-12 rounded-xl bg-slate-100 mt-12 mx-auto relative">
          <input
            className="w-full h-full px-5 text-lg font-semibold outline-none rounded-xl bg-slate-100"
            type="text"
            placeholder="Search"
            value={result}
            onChange={handleChange}
            ref={searchRef}
          />
          <div>
            {result && (
              <IoMdCloseCircle
                className="absolute top-1/2 right-5 bottom-1/2 my-auto"
                size={30}
                onClick={handleDelete}
              ></IoMdCloseCircle>
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        {/* <div className="px-5 py-3 mt-5 h-20 w-full flex justify-between items-center">
          <div className="font-semibold text-xl">Gần đây</div>
          <div className="font-semibold text-xl text-blue-600 hover:text-blue-900 cursor-pointer">
            Clear All
          </div>
        </div> */}
        <div className="flex flex-col mt-4">
          {listUser?.map((u) => (
            <Link to={`/profile/${u?.name}`}>
              <SearchItem name={u?.name} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
