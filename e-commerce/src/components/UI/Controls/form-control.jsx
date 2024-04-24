import React from "react";
import Input from "./Input";

function ControlGroup({ children, ...props }) {
  return (
    <div className={` flex flex-col gap-1`} {...props}>
      {children}
    </div>
  );
}

ControlGroup.Label = function Label({ children, ...props }) {
  return (
    <label className={` text-base font-semibold`} {...props}>
      {children}
    </label>
  );
};

ControlGroup.Input = Input;

export default ControlGroup;
