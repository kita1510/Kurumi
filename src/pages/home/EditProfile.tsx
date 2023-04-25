import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BeatLoader from "~/components/icons/BeatLoader";
import Sidebar from "~/components/patials/Sidebar";
import Avatar from "~/components/shared/Avatar";
import Button from "~/components/shared/Button";
import { useAuthUser } from "~/contexts/AuthContext";
import useUser from "~/hooks/useUser";
import supabase from "~/lib/supabase";

const EditProfile = () => {
  const { user } = useAuthUser();
  const { u, status } = useUser(user?.name);

  const [bio, setBio] = useState(u?.Profile[0]?.bio);

  console.log(bio);

  console.log(u);
  console.log(status);

  async function updateBio() {
    const req = await supabase
      .from("Profile")
      .update("bio", bio)
      .eq("userId", u?.Profile[0]?.userId);
      console.log(req)
  }

  const { mutate, isLoading } = useMutation({ mutationFn: updateBio });

  return (
    <div className="w-full h-[600px]">
      <Sidebar />
      <div className="pl-[100px] ">
        <div>
          <div className="p-10 text-3xl font-semibold">Settings</div>
        </div>
        <div className=" flex w-[80%] h-[80%] justify-center">
          <div className="flex w-[460px] h-28 flex-col justify-between gap-5 items-center">
            <div className="flex w-full items-center flex-row gap-5">
              <Avatar
                className="w-12 h-12 rounded-full object-cover"
                src={u?.Profile[0]?.avatar}
                alt=""
              />
              <div>
                <div className="font-semibold">{u?.name}</div>
                <div className="font-semibold text-green-600 cursor-pointer">
                  <input id="avatarUser" type="file" hidden />
                  <label
                    className="font-semibold text-green-600 cursor-pointer hover:text-red-500"
                    htmlFor="avatarUser"
                  >
                    Change profile photo
                  </label>
                </div>
              </div>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate();
              }}
            >
              <div className="flex gap-10">
                <label className="font-semibold text-lg">Bio</label>
                <textarea
                  className="w-[400px] h-16 px-3 py-1 border-[1px]"
                  onChange={(e) => setBio(e.target.value)}
                  value={bio}
                />
              </div>
              <Button className="mr-64 mt-8 bg-green-500 rounded-lg text-white font-semibold">
                Submit
              </Button>
              <BeatLoader loading={isLoading} color={"#333333"}></BeatLoader>
              <div className="font-semibold text-red-500 mt-4">{}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
