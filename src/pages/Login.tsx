import React, { Fragment, useContext } from "react";
import { AuthContext, AuthProps } from "~/contexts/AuthContext";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomeButton from "~/components/HomeButton";

const LoginPage = () => {
  const {
    user,
    handleEnterEmail,
    handleEnterPassword,
    handleRegister,
    handleLogin,
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
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg outline-none mx-auto "
              onClick={handleLogin}
              disabled={isLoading}
            >
              Log In
            </button>
          )}
        </div>
        <div>
          Chưa có tài khoản.
          <Link to="/register">
            <b> Đăng kí ngay</b>
          </Link>
        </div>
        {isSuccess ? (
          <div className="mt-2 font-semibold">Đăng kí tài khoản thành công. Vui lòng đăng nhập</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
