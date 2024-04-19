import React from "react";

const Button = ({
  size = "lg",
  mode = "fill",
  children,
  className = "",
  type,
  ...props
}) => {
  let buttonClass = className;
  

  if (size === "lg") {
    buttonClass += ` px-5 py-3 rounded-lg text-base`;
  }
  if (size === "sm") {
    buttonClass += ` px-2 py-2 rounded-md text-xs`;
  }
  if (size === "xs"){
    buttonClass += ` px-1 py-1 rounded-sm text-xs`;
  }
  if (mode === "fill") {
    buttonClass += " bg-blue-900 text-blue-100 hover:bg-blue-800 active:bg-blue-950";
  }
  if (mode === "outlined") {
    buttonClass += " border-blue-900 border-px text-blue-900";
  }
  if (mode === "text") {
    buttonClass += " border-0 text-blue-900 hover:text-blue-950 active:text-blue-800";
  }
  return (
    <button type={type || "button"} className={buttonClass + " "} {...props}>
      {children}
    </button>
  );
};

export default Button;
