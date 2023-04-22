import React from "react";
import { Link } from "react-router-dom";
import { AuthUser, Profile, UserInfo } from "~/types";
import Avatar from "./Avatar";

export type UserProfile = AuthUser & {
  Profile: Profile[];
};

const UserActive = ({ props }: { props: UserInfo }) => {
  return (
    <div className="flex flex-col gap-1">
      <Link to={{ pathname: `/profile/${props?.name}` }} state={props}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  flex  justify-center items-center">
          <Avatar
            className=" h-[4.5rem] w-[4.5rem] border-4"
            src={
              props?.profile?.avatar ||
              "https://i.pinimg.com/originals/de/71/d6/de71d64ae6174176ab9cd108bf7c7c3c.jpg"
            }
            alt=""
          />
        </div>
        <div className="mx-auto flex justify-center font-semibold mt-2">{props?.name}</div>
      </Link>
    </div>
  );
};

export default UserActive;
