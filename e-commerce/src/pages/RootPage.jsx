import  { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch } from "react-redux";
import { getCartProducts } from "../store/cart/cartActions";
import Notification from "../components/UI/Notification";
const RootPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <>
      <Notification />
      <Navigation />
      <Outlet />
    </>
  );
};

export default RootPage;
