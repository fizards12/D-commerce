import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { useCallback } from "react";
import { addItem, deleteItem } from "../store/cart/cartActions";

const useCartProductActions = (item) => {
  const dispatch = useDispatch();
  const addToCart = useCallback(() => {
    dispatch(addItem(item));
  },[item]);
  const incrementHandler = useCallback(() => {
    dispatch(cartActions.increaseAmount(item.id));
  },[item.id]);

  const decrementHandler = useCallback(() => {
    dispatch(cartActions.decreaseAmount(item.id));
  },[item.id]);
  const removeFromCart = useCallback(() => {
    dispatch(deleteItem(item.id));
  },[item.id]);

  return { addToCart, incrementHandler, decrementHandler, removeFromCart };
};

export default useCartProductActions;
