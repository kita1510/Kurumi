import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import SideBar from "~/components/sidebar/Sidebar";
import client from "~/configs/client";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import useProfile from "~/hooks/useProfile";
import BeatLoader from "~/components/icons/BeatLoader";
import supabase from "~/lib/supabase";
import { v4 as uuidv4 } from "uuid";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Profile } from "~/types";
import { useParams } from "react-router-dom";

const EditProfile = () => {
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
              <img className="w-12 h-12 rounded-full object-cover" src={""} alt="" />
              <div>
                <div className="font-semibold">{}</div>
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
            <form>
              <div className="flex gap-10">
                <label className="font-semibold text-lg">Bio</label>
                <textarea className="w-[400px] h-16 px-3 py-1 border-[1px]" />
              </div>
              <button className="px-5 py-[7px] mr-64 mt-8 bg-green-500 rounded-lg text-white font-semibold">
                Submit
              </button>
              <BeatLoader loading={true} color={"#333333"}></BeatLoader>
              <div className="font-semibold text-red-500 mt-4">{}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
