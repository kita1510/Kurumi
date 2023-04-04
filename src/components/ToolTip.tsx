import { Tooltip } from "@material-tailwind/react";
import React, { ReactNode } from "react";

const App = ({ children, content }: { children: ReactNode; content: string }) => {
  return (
    <Tooltip
      content={content}
      placement="right"
      className="px-3 z-[200] rounded-lg ml-3 py-2 font-normal text-base before:context[''] 
    before:absolute before:top-[11px] before:left-[-25px] before:rounded-l-lg  
    before:px-2 before:border-t-[10px] before:border-t-transparent before:border-r-[10px]
     before:border-r-black before:border-b-[10px] before:border-b-transparent"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default App;
