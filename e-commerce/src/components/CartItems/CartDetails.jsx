import React,{ useEffect, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { notifyActions } from "../../store/ui/notification";
import { updateItemRequest } from "../../utlis/cartRequest";
import useCartProductActions from "../../Hooks/use-cartProductActions";
import Button from "../UI/Button/Button";
import { FaTrashAlt } from "react-icons/fa";

const CartDetails = ({ item }) => {
    
    const { product, amount } = item;
    const timer = useRef();
    const dispatch = useDispatch();
    const updateItem = async () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(async () => {
        dispatch(
          notifyActions.setNotification({
            message: "Updating cart item...",
            status: "fetching",
            show: true,
          })
        );
        try {
          await updateItemRequest(item);
          dispatch(
            notifyActions.setNotification({
              message: "Cart Item updated successfully.",
              status: "success",
            })
          );
        } catch (error) {
          dispatch(
            notifyActions.setNotification({
              message: error.message,
              status: "error",
            })
          );
        }
        setTimeout(() => {
          dispatch(notifyActions.initiate());
        }, 1500);
      }, 500);
    };
    const { incrementHandler, decrementHandler, removeFromCart } =
      useCartProductActions(item);
  
    if (amount >= 1 ) {
      updateItem();
    }
    console.log(amount)
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
  };


  export default React.memo(CartDetails);