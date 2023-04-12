import React, { createContext, ReactElement, ReactNode, useContext, useState } from "react";
import { ToastProps } from "../types/index";

export const ToastContext = createContext<ToastProps>(null!);

function ToastProvider({ children }: { children: ReactNode }) {
  const [toggle, setToggle] = useState(false);
  const [text, setText] = useState<ReactElement>(<></>);

  function changeToggle(toggle: boolean) {
    setToggle(toggle);
  }

  function changeText(text: ReactElement) {
    setText(text);
  }

  return (
    <ToastContext.Provider value={{ toggle, changeToggle, text, changeText }}>
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  return useContext<ToastProps>(ToastContext);
};

export default ToastProvider;
