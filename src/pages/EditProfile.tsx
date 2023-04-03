import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import SideBar from "~/components/Sidebar";
import client from "~/configs/client";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import BeatLoader from "~/icons/BeatLoader";
import supabase from "~/lib/supabase";
import { v4 as uuidv4 } from "uuid";

const EditProfile = () => {
  const { user } = useContext<AuthProps>(AuthContext);
  const [bio, setBio] = useState<string>("");
  const profile = useProfile();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [avatar, setAvatar] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (avatarUrl) {
      upLoadAvatar();
    }
  }, [avatarUrl]);

  function handleUpdateBio(e: ChangeEvent<HTMLTextAreaElement>) {
    setBio(e.target.value);
  }

  async function upLoadAvatar() {
    const { data, error } = await supabase.storage.from("avatars/avatar").download(avatarUrl);
    if (data) {
      const url = URL.createObjectURL(data);
      setAvatar(url);
    }
    if (profile?.avatar) {
      await client({
        method: "PUT",
        url: `/api/profiles/${profile?.id}`,
        headers: { Authorization: "Bearer " + user?.accessToken },
        data: { avatar },
      });
      setMessage("Cập nhật ảnh đại diện thành công!");
    } else {
      await client({
        method: "POST",
        url: `/api/profiles/`,
        headers: { Authorization: "Bearer " + user?.accessToken },
        data: { avatar, userId: user?.id },
      });

      setMessage("Cập nhật ảnh đại diện thành công!");
    }
  }

  async function handleUploadAvatar(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files || e.target.files.length === 0) {
      setError("Chọn file ảnh cần upload");
    } else {
      const file = e.target.files[0];
      const filePath = `${file?.name}`;
      const typeOfFile = filePath.split(".")[1];
      const fileUp = `${uuidv4()}.${typeOfFile}`;
      console.log(fileUp);
      setAvatarUrl(filePath);
      await supabase.storage.from("avatars/avatar").upload(fileUp, file, { upsert: true });
    }
  }

  async function updateBio(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (bio) {
      setIsloading(true);
      try {
        if (profile?.bio) {
          await client({
            method: "PUT",
            url: `/api/profiles/${profile?.id}`,
            headers: { Authorization: "Bearer " + user?.accessToken },
            data: { bio },
          });
          setMessage("Update bio thành công!");
        } else {
          await client({
            method: "POST",
            url: `/api/profiles/`,
            headers: { Authorization: "Bearer " + user?.accessToken },
            data: { bio, userId: user?.id },
          });
          setMessage("Update bio thành công!");
        }
        setBio("");
        setIsloading(false);
      } catch (err) {
        setIsloading(false);
        console.log(err);
      }
    } else {
      setMessage("Nhập thông tin đi đã bro!");
    }
  }

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
              <img className="w-12 h-12 rounded-full" src={profile?.avatar} alt="" />
              <div>
                <div className="font-semibold">{user?.name}</div>
                <div className="font-semibold text-green-600 cursor-pointer">
                  <input id="avatarUser" type="file" onChange={handleUploadAvatar} hidden />
                  <label
                    className="font-semibold text-green-600 cursor-pointer hover:text-red-500"
                    htmlFor="avatarUser"
                  >
                    Change profile photo
                  </label>
                </div>
              </div>
            </div>
            <form onSubmit={updateBio}>
              <div className="flex gap-10">
                <label className="font-semibold text-lg">Bio</label>
                <textarea
                  className="w-[400px] h-16 px-3 py-1 border-[1px]"
                  onChange={handleUpdateBio}
                  value={bio}
                />
              </div>
              <button className="px-5 py-[7px] mr-64 mt-8 bg-green-500 rounded-lg text-white font-semibold">
                Submit
              </button>
              {isLoading ? (
                <BeatLoader loading={isLoading} color={"#333333"}></BeatLoader>
              ) : (
                <div className="font-semibold text-red-500 mt-4">{message}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
