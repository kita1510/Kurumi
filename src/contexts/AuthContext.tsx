import { useMutation } from "@tanstack/react-query";
import React, { createContext, ReactNode, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SuccessNotify from "~/components/icons/SuccessNotify";
import client from "~/configs/client";
import useLocalStorage from "~/hooks/useLocalStorage";
import { AuthUser } from "~/types";
import { useToast } from "./ToastContext";

export interface AuthProps {
  user: AuthUser;
  handleRegister: ({ email, password, name }: UserInput) => any;
  handleLogin: ({ email, password }: Omit<UserInput, "name">) => any;
  handleSignOut: () => void;
}

type UserInput = {
  email: string;
  password: string;
  name: string;
};

export const AuthContext = createContext<AuthProps>(null!);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useLocalStorage<AuthUser>("user", null!);
  const { changeText, changeToggle } = useToast();
  const navigate = useNavigate();

  const login = async ({ email, password }: Omit<UserInput, "name">) => {
    await client.post("/api/auth/login", { email, password }).then((res) => setUser(res.data));
    navigate("/");
  };
  function handleLogin({ email, password }: Omit<UserInput, "name">) {
    return useMutation({
      mutationFn: () => login({ email, password }),
      onSuccess: () => {
        changeToggle(true);
        changeText(<SuccessNotify children="Đăng nhập thành công" />);
      },
    });
  }

  const register = async ({ email, password, name }: UserInput) => {
    await client.post("/api/auth/register", { name, email, password });
    navigate("/login");
  };

  function handleRegister({ email, password, name }: UserInput) {
    return useMutation({
      mutationFn: () => register({ email, password, name }),
      onSuccess: () => {
        changeToggle(true);
        changeText(<SuccessNotify children="Đăng kí thành công" />);
      },
    });
  }

  async function handleSignOut() {
    setUser("");
    localStorage.setItem("user", "");
    changeToggle(true);
    changeText(<SuccessNotify children="Đã đăng xuất" />);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        handleRegister,
        handleLogin,
        handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuthUser = () => useContext<AuthProps>(AuthContext);
