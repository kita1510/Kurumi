import React, { useState } from "react";
import Image from "./Image";
import classNames from "classnames";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  className?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, className, alt, ...props }) => {
  const [isLoadFailed, setIsLoadFailed] = useState(false);
  const handleLoadFailed = () => {
    setIsLoadFailed(true);
  };
  return (
    <div {...props} className={classNames("shrink-0 relative w-10 h-10 rounded-full", className)}>
      <Image
        src={isLoadFailed || !src ? "/fallback_profile.png" : src}
        onError={handleLoadFailed}
        isCircle={true}
        className={"rounded-full w-full h-full"}
        alt="avatar"
      ></Image>
    </div>
  );
};

export default React.memo(Avatar);
