import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

const SuccessNotify = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-center font-semibold">
    {text}
    <BsCheckCircleFill size={20} fill={"green"} />
  </div>
);

export default React.memo(SuccessNotify);
