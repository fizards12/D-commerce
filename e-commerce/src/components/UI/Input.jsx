import React, { forwardRef } from "react";

const Input = forwardRef(({ className, children, ...props },ref) => {
  return <input className={className} {...props} ref={ref}/>;
});

export default Input;
