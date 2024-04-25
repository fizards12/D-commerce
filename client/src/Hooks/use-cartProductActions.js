import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart";
import { useCallback, useEffect, useRef } from "react";
import { addItem, deleteItem, updateCart } from "../store/cart/cartActions";

const useCartProductActions = (item) => {
  const itemRef = useRef({ initiated: false });
  const dispatch = useDispatch();
  const addToCart = useCallback(() => {
    if (itemRef.current.timer) {
      clearTimeout(itemRef.current.timer);
    }
    itemRef.current.timer = setTimeout(() => {
      dispatch(addItem(item));
    }, 500);
  }, [item, dispatch]);
  const incrementHandler = useCallback(() => {
    dispatch(cartActions.increaseAmount(item.id));
  }, [item.id, dispatch]);

  const decrementHandler = useCallback(() => {
    dispatch(cartActions.decreaseAmount(item.id));
  }, [item.id, dispatch]);
  const removeFromCart = useCallback(() => {
    dispatch(deleteItem(item.id));
  }, [item.id, dispatch]);

  useEffect(() => {
    const updateItem = async () => {
      if (itemRef.current.timer) {
        clearTimeout(itemRef.current.timer);
      }
      itemRef.current.timer = setTimeout(() => {
        dispatch(updateCart(item));
      }, 500);
    };

    if (item.amount >= 1 && itemRef.current.initiated) {
      updateItem();
    }
  }, [item, dispatch]);

  useEffect(() => {
    itemRef.current.initiated = true;
  }, []);

  return {
    addToCart,
    incrementHandler,
    decrementHandler,
    removeFromCart,
  };
};

export default useCartProductActions;
