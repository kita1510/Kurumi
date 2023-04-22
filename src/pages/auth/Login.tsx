import React, { useRef, useState } from "react";
import { useAuthUser } from "~/contexts/AuthContext";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import HomeButton from "~/components/shared/HomeButton";
import ThreesDotLoader from "~/components/icons/ThreeDotsLoader";
import Button from "~/components/shared/Button";
import Input from "~/components/shared/Input";

const LoginPage = () => {
  const email = useRef<HTMLInputElement>(null!);
  const password = useRef<HTMLInputElement>(null!);
  const { handleLogin } = useAuthUser();

  const loginMutation = handleLogin({
    email: email.current?.value,
    password: password.current?.value,
  });
  console.log(loginMutation);

  return (
    <div className="flex justify-center items-center mt-20">
      <HomeButton />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-80">
          <Input
            className="px-3 py-1 flex text-black"
            label="Email"
            ref={email}
            LeftIcon={<HiOutlineMail />}
            placeholder="email"
          />
        </div>
        <div className="flex items-center justify-between gap-4 w-80">
          <Input
            className="px-3 py-1 flex flex-col"
            label="Password"
            ref={password}
            LeftIcon={<RiLockPasswordLine />}
            type={"password"}
            placeholder="password"
          />
        </div>
        <div>
          {loginMutation.isLoading ? (
            <ThreesDotLoader loading={loginMutation.isLoading} />
          ) : (
            <Button
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg outline-none mx-auto "
              onClick={() => loginMutation.mutate()}
            >
              Log In
            </Button>
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
