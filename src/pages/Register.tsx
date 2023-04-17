import { useAuthUser } from "~/contexts/AuthContext";
import { RiLockPasswordLine } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import HomeButton from "~/components/shared/HomeButton";
import ThreesDotLoader from "~/components/icons/ThreeDotsLoader";
import { useState } from "react";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleRegister } = useAuthUser();
  const register = handleRegister({ email, name, password });
  
  return (
    <div className="flex justify-center items-center mt-20">
      <HomeButton />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between w-80">
          <div className="flex items-center gap-2">
            <BiUserCircle />
            <label className=" font-semibold" htmlFor="">
              Name:
            </label>
          </div>
          <input
            className="px-2 py-1 border-2 text-base"
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
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
          {register.isLoading ? (
            <ThreesDotLoader loading={register.isLoading} />
          ) : (
            <button
              className="px-5 py-2 bg-red-500 text-white font-semibold rounded-lg outline-none mx-auto "
              onClick={() => register.mutate()}
            >
              Register
            </button>
          )}
        </div>
        <div>
          Nếu đã có tài khoản.
          <Link to="/login">
            <b> Đăng nhập ngay</b>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
