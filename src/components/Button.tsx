import React, { forwardRef, ElementRef } from "react";

type buttonType = {
  className?: string;
  onClick?: () => void;
  buttonRef?: any;
  children: React.ReactNode;
  type: undefined | "button" | "reset" | "submit";
};

const Button = forwardRef(({ children, buttonRef, ...res }: buttonType) => {
  return (
    <button ref={buttonRef} {...res}>
      {children}
    </button>
  );
});

export default Button;
