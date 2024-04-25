import  { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import { useDispatch } from "react-redux";
import { getCartProducts } from "../store/cart/cartActions";
import Notification from "../components/UI/Notification";
import Diamond from "../assets/Diamond.svg"
const RootPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartProducts());
  }, [dispatch]);

  return (
    <>

    <div 
    className={`absolute h-2/3 -z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2`}>
      <img src={Diamond} className=" h-full max-w-max opacity-10" alt="Logo" />
    </div>
    <div className="flex flex-col h-full">
      <Notification />
      <Navigation />
      <Outlet />
    </div>
    </>
  );
};

export default RootPage;
