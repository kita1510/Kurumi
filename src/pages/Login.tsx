import React, { useState } from "react";
import { useAuthUser } from "~/contexts/AuthContext";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomeButton from "~/components/shared/HomeButton";
import ThreesDotLoader from "~/components/icons/ThreeDotsLoader";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuthUser();

  const loginMutation = handleLogin({ email, password });
  console.log(loginMutation);

  return (
    <div className="flex justify-center items-center mt-20">
      <HomeButton />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-80">
          <div className="flex items-center gap-2">
            <HiOutlineMail />
            <label className=" font-semibold" htmlFor="">
              Email:
            </label>
          </div>
          <input
            className="px-2 py-1 border-2"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="flex items-center justify-between gap-4 w-80">
          <div className="flex items-center gap-2">
            <RiLockPasswordLine />
            <label className="font-semibold" htmlFor="">
              Password:
            </label>
          </div>
          <input
            className="px-2 py-1 border-2"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <div>
          {loginMutation.isLoading ? (
            <ThreesDotLoader loading={loginMutation.isLoading} />
          ) : (
            <button
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg outline-none mx-auto "
              onClick={() => loginMutation.mutate()}
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
      </div>
    </div>
  );
};

export default LoginPage;
