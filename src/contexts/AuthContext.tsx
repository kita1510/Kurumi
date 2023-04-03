import React, { ChangeEvent, createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import client from "~/configs/client";

export interface AuthProps {
  user: {};
  handleEnterUserName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEnterPassword: (e: ChangeEvent<HTMLInputElement>) => void;
  handleRegister: () => void;
  handleLogin: () => void;
  handleSignOut: () => void;
  isLoading: boolean;
  isSuccess: boolean;
}

export const AuthContext = createContext<AuthProps>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState({});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const res = await client
        .post("/api/auth/login", { email, password })
        .then((res) => setUser(res.data));
      navigate("/");
    } catch (err) {}
  }

  function handleEnterUserName(e: ChangeEvent<HTMLInputElement>) {
    setUserName(e.target.value);
    console.log(userName);
  }
  function handleEnterEmail(e: ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(email);
  }
  function handleEnterPassword(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    console.log(password);
  }

  async function handleRegister() {
    setIsLoading(true);
    try {
      await client.post("/api/auth/register", { name: userName, email, password });
      console.log("Đăng kí tài khoản khoản thành công");
      setIsLoading(false);
      setIsSuccess(true);
      setUserName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
    }
  }

  async function handleSignOut() {
    setUser("");
    localStorage.setItem("user", "");
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleEnterUserName,
        handleEnterEmail,
        handleEnterPassword,
        handleRegister,
        handleLogin,
        handleSignOut,
        isLoading,
        isSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
