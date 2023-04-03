import React, { useContext } from "react";
import SideBar from "~/components/Sidebar";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";

const EditProfile = () => {
  const { user } = useContext<AuthProps>(AuthContext);
  return (
    <div className="w-full h-[600px]">
      <SideBar></SideBar>
      <div className="pl-[100px] ">
        <div>
          <div className="p-10 text-3xl font-semibold">Settings</div>
        </div>
        <div className=" flex w-[80%] h-[80%] justify-center">
          <div className="flex w-[460px] h-28 flex-col justify-between gap-5 items-center">
            <div className="flex w-full items-center flex-row gap-5">
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.pinimg.com/564x/98/73/47/9873472f761326b05a2bacf06a53d7f8.jpg"
                alt=""
              />
              <div>
                <div className="font-semibold">{user?.name}</div>
                <div className="font-semibold text-green-600 cursor-pointer">Change profile photo</div>
              </div>
            </div>
            <div className="flex gap-10">
              <label className="font-semibold text-lg">Bio</label>
              <textarea className="w-[400px] h-16 px-3 py-1 border-[1px]" />
            </div>
            <button className="px-5 py-[7px] mr-64 bg-green-500 rounded-lg text-white font-semibold">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
