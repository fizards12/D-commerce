import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { getCartProducts } from "../store/cart/cartActions";
import Notification from "../components/UI/Notification";
let initiated = false;
const RootPage = () => {
  const dispatch = useDispatch();
  const isChanged = useSelector((state) => state.cart.isChanged);
  const cart = useSelector((state) => state.cart.products);
  useEffect(() => {
    dispatch(getCartProducts());
  }, []);

  useEffect(() => {
    if (!initiated) {
      initiated = true;
      return;
    }
    if (isChanged) {
      // dispatch(sendCart(cart));
    }
  }, [cart]);
  return (
    <>
      <Notification />
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootPage;
