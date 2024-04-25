import React from "react";
import CartDetails from "./CartDetails";
const CartItem = ({ children, className, ...props }) => {
  
  return (
    <div
      className={`${className} text-xl border-px border-blue-300 rounded-md p-3 flex justify-between items-center w-full`}
      {...props}
    >
      {children}
    </div>
  );
};

CartItem.Preview = ({ children, className, src, name, ...props }) => {
  return (
    <div
      className={`${className} p-2 border-blue-400 border-px rounded-md h-20 min-w-max`}
      {...props}
    >
      <img className={`h-full`} src={src} alt={name} />
    </div>
  );
};
CartItem.Details = CartDetails;

CartItem.Actions = ({ onIncrement, onDecrement }) => {
  return <></>;
};

export default CartItem;
