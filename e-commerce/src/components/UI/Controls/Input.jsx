import React from "react";

function Input({ status, size = "md", className, ...props }) {
  let classes = "";
  if (size === "sm") {
    classes = "h-8 rounded-sm";
  }
  if (size === "md") {
    classes = "h-9 rounded";
  }
  if (size === "lg") {
    classes = "h-11 rounded-lg";
  }
  return (
    <input
      className={`${className || ""} 
      ${classes}  
      border-px border-slate-400 border-solid 
      focus:border-2 focus:outline-none
      p-2
      text-base`}
      {...props}
    />
  );
}

export default Input;
