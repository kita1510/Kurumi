import React, { ReactNode } from "react";

const UserActive = () => {
  return (
    <div className="flex flex-col gap-1">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  flex  justify-center items-center">
        <img
          className="w-[70px] h-[70px] border-4 rounded-full"
          src="https://i.pinimg.com/564x/84/f6/6d/84f66d61bf7e64ebb0a348e4e6f644e8.jpg"
          alt=""
        />
      </div>
        <div className="mx-auto">Nino</div>
    </div>
  );
};

export default UserActive;
