/* eslint-disable react/prop-types */
import React from "react";
import useCartProductActions from "../../Hooks/use-cartProductActions";
import Button from "../UI/Button/Button";
import { FaTrashAlt } from "react-icons/fa";

const CartDetails = React.memo(function CartDetails({ item }) {
  const { product, amount } = item;
  
  const { incrementHandler, decrementHandler, removeFromCart } =
    useCartProductActions(item);
  
    return (
    <>
      <h3 className={`font-bold`}>{product.name}</h3>
      <Button size="sm" className="w-10" mode="text" onClick={incrementHandler}>
        <span className="text-2xl leading-4 font-bold">+</span>
      </Button>
      <div className="px-2 py-1 text-base bg-slate-300 shadow-inner shadow-slate-400 rounded-md">
        {amount}
      </div>
      <Button
        size="sm"
        className="w-10"
        mode="text"
        onClick={() => {
          if (amount > 1) {
            decrementHandler();
          } else {
            removeFromCart();
          }
        }}
      >
        <span className="text-2xl leading-4 font-bold">-</span>
      </Button>

      <span className="font-semibold"> ${`${product.price * amount}`}</span>

      <Button size="sm" mode="text" onClick={removeFromCart}>
        <FaTrashAlt
          className={`text-slate-500 hover:text-slate-600 active:text-slate-700`}
          size={20}
        />
      </Button>
    </>
  );
});

export default CartDetails;
