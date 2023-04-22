import React from "react";
import classNames from "classnames";

export interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>((props, ref) => {
  const { isLoading, className, children, ...rest } = props;
  return (
    <button className={classNames(className)} ref={ref} {...rest}>
      {children}
    </button>
  );
});

BaseButton.displayName = "BaseButton";

export default BaseButton;
