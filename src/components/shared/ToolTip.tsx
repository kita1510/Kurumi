import { Tooltip, TooltipProps } from "@material-tailwind/react";

const App = ({ children, content, placement, className }: TooltipProps) => {
  return (
    <Tooltip
      content={content}
      placement={placement}
      className={`px-3 z-[200] rounded-lg ml-3 py-2  text-base before:content[''] 
      before:absolute before:top-[11px] before:left-[-25px] before:rounded-l-lg font-semibold
      before:px-2 before:border-t-[10px] before:border-t-transparent bg-white text-black
      before:border-r-[10px] before:border-r-white  before:border-b-[10px] before:border-b-transparent ${className}`}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 0 },
      }}
    >
      {children}
    </Tooltip>
  );
};

export default App;
