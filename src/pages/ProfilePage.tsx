import React, { useContext } from "react";
import Sidebar from "~/components/Sidebar";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import { SlOptions } from "react-icons/sl";

const ProfilePage = () => {
  const { user } = useContext<AuthProps>(AuthContext);
  const profile = useProfile();

  console.log(profile);
  return (
    <div>
      <div className="w-full">
        <div className="w-[20%] h-full bg-slate-500">
          <Sidebar />
        </div>
        <div className="w-[80%] mt-10 ml-32 h-[200px] flex flex-row border-b-2">
          <div className=" h-20 w-[20%] rounded-full mx-20 ">
            <img
              className="w-32 h-32 rounded-full"
              src={
                profile?.avatar ||
                "https://i.pinimg.com/564x/b2/2f/1a/b22f1abede127b219aeb4db09e06cef7.jpg"
              }
              alt=""
            />
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-7 mb-3">
              <div className="font-semibold text-2xl mr-3">{user?.name}</div>
              <button className="px-5 py-2 rounded-lg font-semibold bg-slate-100">
                Edit Profile
              </button>
              <SlOptions />
            </div>
            <div className="flex items-center gap-9">
              <div className="font-normal">
                <span className="font-semibold">0 </span> posts
              </div>
              <div className="font-normal">
                <span className="font-semibold">6 </span> follower
              </div>
              <div className="font-normal">
                <span className="font-semibold">6 </span> following
              </div>
            </div>

            <div className="flex items-center gap-6 mt-2 font-semibold">{profile?.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
