import React from "react";
import { Link } from "react-router-dom";
import { AuthUser, Profile } from "~/types";

export type UserProfile = AuthUser & {
  Profile: Profile[];
};

const UserActive = ({ props }: Record<"props", UserProfile>) => {
  // console.log(props?.Profile[0]);
  // console.log(props.Profile[0]?.bio);
  return (
    <div className="flex flex-col gap-1">
      <Link to={{ pathname: `/profile/${props?.name}` }} state={props}>
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500  flex  justify-center items-center">
          <img
            className="w-[70px] h-[70px] border-4 rounded-full"
            src={
              props?.Profile[0]?.avatar ||
              "https://i.pinimg.com/564x/84/f6/6d/84f66d61bf7e64ebb0a348e4e6f644e8.jpg"
            }
            alt=""
          />
        </div>
        <div className="mx-auto">{props?.name}</div>
      </Link>
    </div>
  );
};

export default UserActive;
