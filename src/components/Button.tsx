import React, { forwardRef, ElementRef } from "react";

type buttonType = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type: undefined | "button" | "reset" | "submit";
};

const Button = forwardRef(({ children, ...res }: buttonType) => {
  return <button {...res}>{children}</button>;
});

export default Button;
