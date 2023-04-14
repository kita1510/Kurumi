import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const SuccessNotify = ({ children }: { children: string }) => (
  <div className="flex gap-3 items-center font-semibold">
    {children}
    <BsCheckCircleFill size={20} fill={"green"} />
  </div>
);

export default SuccessNotify;
