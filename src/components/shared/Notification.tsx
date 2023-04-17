import React from "react";
import ToolTip from "./ToolTip";
import { FiBell } from "react-icons/fi";
const Notification = () => {
  return (
    <ToolTip placement="bottom" content={"Thông báo"}>
      <button className="w-16 h-16 rounded-full bg-stale-300 hover:bg-slate-200 flex justify-center items-center">
        <FiBell size={30}  color="black" />
      </button>
    </ToolTip>
  );
};

export default Notification;
