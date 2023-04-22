import React, { ReactNode } from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import classNames from "classnames";

interface ButtonProps extends BaseButtonProps {
  secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <BaseButton className={classNames("px-3 py-1 flex ", className)} {...props}>
      {children}
    </BaseButton>
  );
};

export default React.memo(Button);
