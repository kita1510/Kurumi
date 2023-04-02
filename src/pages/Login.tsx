import React, { Fragment, useContext } from "react";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";
import HomeButton from "~/components/HomeButton";

const LoginPage = () => {
  const {
    user,
    handleEnterUserName,
    handleEnterEmail,
    handleEnterPassword,
    handleRegister,
    isLoading,
    isSuccess,
  } = useContext<AuthProps>(AuthContext);
  return (
    <div className="flex justify-center items-center mt-20">
      <HomeButton/>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-80">
          <div className="flex items-center gap-2">
            <HiOutlineMail />
            <label className=" font-semibold" htmlFor="">
              Email:
            </label>
          </div>
          <input className="px-2 py-1 border-2" onChange={handleEnterEmail} type="email" />
        </div>
        <div className="flex items-center justify-between gap-4 w-80">
          <div className="flex items-center gap-2">
            <RiLockPasswordLine />
            <label className="font-semibold" htmlFor="">
              Password:
            </label>
          </div>
          <input className="px-2 py-1 border-2" onChange={handleEnterPassword} type="password" />
        </div>
        <div>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <button
              className="w-20 h-10 bg-red-500 text-white font-semibold rounded-lg outline-none mx-auto "
              onClick={handleRegister}
              disabled={isLoading}
            >
              Login
            </button>
          )}
        </div>
        <div>
          Chưa có tài khoản.
          <Link to="/register">
            <b> Đăng kí ngay</b>
          </Link>
        </div>
        {/* {isSuccess ? (
          <div className="mt-5 font-semibold">Đăng kí tài khoản thành công</div>
        ) : (
          <div></div>
        )} */}
      </div>
    </div>
  );
};

export default LoginPage;
