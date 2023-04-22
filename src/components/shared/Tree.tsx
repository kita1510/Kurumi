import React from "react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import Button from "./Button";
import classNames from "classnames";

interface TreeProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  rootName?: string;
}
const Tree: React.FC<TreeProps> = ({ name, rootName, className, ...props }) => {
  return (
    <div className={classNames("flex items-center gap-2", className)} {...props}>
      <Link to="/">
        <Button className="font-semibold hover:text-red-500 px-0 flex items-center gap-2 text-black">
          <HiHome />
          Trang chủ /
        </Button>
      </Link>
      <Button className="font-semibold hover:text-red-500 px-0">{rootName}</Button>/
      <Button className="font-semibold hover:text-red-500 px-0">{name}</Button>
    </div>
  );
};

export default React.memo(Tree);
