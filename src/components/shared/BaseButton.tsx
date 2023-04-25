import React from "react";
import classNames from "classnames";
import { IconType } from "react-icons/lib";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  LeftIcon?: IconType;
  RightIcon?: IconType;
  iconClass?: string;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const { isLoading, className, children, RightIcon, LeftIcon, iconClass, ...rest } = props;
  return (
    <button className={classNames(className)} ref={ref} {...rest}>
      {LeftIcon && <LeftIcon className={iconClass} size={28} />}
      {children}
      {RightIcon && <RightIcon className={iconClass} size={28} />}
    </button>
  );
});

BaseButton.displayName = "BaseButton";

export default BaseButton;
