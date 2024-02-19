import React from "react";

type buttonType = {
  className?: string;
  children: React.ReactNode;
  type: undefined | "button" | "reset" | "submit";
};

const Button = ({ children, ...res }: buttonType) => {
  return <button {...res}>{children}</button>;
};

export default Button;
