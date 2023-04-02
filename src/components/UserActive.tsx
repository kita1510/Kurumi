import React, { ReactNode } from "react";

const UserActive = ({children}: {children: ReactNode}) => {
  return (
    <div className="w-20 h-20 bg-green-500">
      {children}
    </div>
  );
};

export default UserActive;
