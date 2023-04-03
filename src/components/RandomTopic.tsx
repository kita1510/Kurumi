import React from "react";
import { GoBook } from "react-icons/go";

const RandomTopic = () => {
  return (
    <div className="w-[250px] text-sm h-[200px] bg-[#fafafa] absolute right-0 flex flex-col gap-3 p-5">
      <div className="text-sm font-semibold">Hôm nay đọc gì?</div>
      <div>Nếu bạn buồn phiền không biết đọc gì hôm nay. Hãy để chúng tôi chọn cho bạn</div>
      <button className="w-52 h-10 bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg flex justify-center items-center  gap-3">
        <GoBook size={20}/>{" "}
        <span className="font-semibold">
          Đọc truyện ngẫu nhiên
        </span>
      </button>
    </div>
  );
};

export default RandomTopic;
