import React, { useContext, useEffect, useState } from "react";
import Sidebar from "~/components/sidebar/Sidebar";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import { SlOptions } from "react-icons/sl";
import { Link, useLocation, useParams } from "react-router-dom";
import useUser from "~/hooks/useUser";

const ProfilePage = () => {
  const { user } = useContext<AuthProps>(AuthContext);

  const param = useParams();

  const { u, status } = useUser(param?.id);
  console.log(u);

  const profile = useProfile(2);

  console.log(profile);

  return (
    <div>
      <div className="w-full">
        <Sidebar />
        {status === "success" && (
          <div className="w-[80%] mt-10 ml-32 h-[200px] flex flex-row border-b-2">
            <div className=" h-20 w-[20%] rounded-full mx-20 ">
              <img className="w-32 h-32 rounded-full object-cover" src={profile?.avatar || "https://i.pinimg.com/564x/04/39/b9/0439b94014a27f46c249717813364bb1.jpg"} alt="" />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-7 mb-3">
                <div className="font-semibold text-2xl mr-3">{u?.name}</div>
                {u?.id === user?.id ? (
                  <Link to={`/profile/edit/${user?.id}`}>
                    <button className="px-5 py-2 rounded-lg font-semibold bg-slate-100">
                      Edit Profile
                    </button>
                  </Link>
                ) : (
                  <button className="px-5 py-2 rounded-lg font-semibold bg-slate-100">
                    Follow
                  </button>
                )}
                <SlOptions />
              </div>
              <div className="flex items-center gap-9">
                <div className="font-normal">
                  <span className="font-semibold">0 </span> posts
                </div>
                <div className="font-normal">
                  <span className="font-semibold"></span> follower
                </div>
                <div className="font-normal">
                  <span className="font-semibold">6 </span> following
                </div>
              </div>

              <div className="flex items-center gap-6 mt-2 font-semibold">{profile?.bio}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
