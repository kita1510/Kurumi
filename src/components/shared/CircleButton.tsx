import React from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import classNames from "classnames";

export interface CircleButtonProps extends BaseButtonProps {}

const CircleButton = React.forwardRef<HTMLButtonElement, CircleButtonProps>((props, ref) => {
  const { className, children, ...rest } = props;
  return (
    <BaseButton
      className={classNames("p-2 rounded-full flex justify-center items-center", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </BaseButton>
  );
});

CircleButton.displayName = "CircleButton";

export default CircleButton;
