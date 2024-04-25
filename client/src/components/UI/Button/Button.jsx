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
    buttonClass += ` px-10 py-2 min-h-12 max-h-12 rounded-md text-base font-semibold`;
  }
  if (size === "md") {
    buttonClass += ` px-7 py-1 min-h-11 max-h-11 rounded-md text-sm font-semibold`;
  }
  if (size === "sm") {
    buttonClass += ` px-4 py-1 min-h-9 max-h-9 rounded-sm text-xs`;
  }
  if (size === "xs"){
    buttonClass += ` px-2 py-1 min-h-8 max-h-8 rounded-sm text-xs`;
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
    <button type={type || "button"} className={buttonClass +" disabled:bg-gray-400 disabled:text-gray-700"} {...props}>
      {children}
    </button>
  );
};

export default Button;
