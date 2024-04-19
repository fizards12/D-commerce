import React, { useEffect } from "react";
import Navbar from "../UI/Navbar/Navbar";
import useMaxBreakPoint from "../../Hooks/use-maxBreakPoint";
import Button from "../UI/Button/Button";
import { FaRegUserCircle } from "react-icons/fa";
import useToggle from "../../Hooks/use-toggle";
import { FaCartShopping } from "react-icons/fa6";
import { IoDiamond } from "react-icons/io5";
import Backdrop from "../UI/Backdrop";
import { Link, useNavigate } from "react-router-dom";
import Badge from "../UI/Badge/Badge";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";
import { getCartProducts } from "../../store/cart/cartActions";

const Navigation = () => {
  const isBreaked = useMaxBreakPoint("768");
  const [value, toggleHandler] = useToggle();
  const navigate = useNavigate();
  let clickHandler = () => {};
  if (isBreaked) {
    clickHandler = toggleHandler;
  }

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <div className={`flex flex-col`}>
      <Navbar>
        <Navbar.Brand title="E-Comm">
          <Link to={"/"}>
            <IoDiamond /> <b className="md:hidden">E</b>
          </Link>
        </Navbar.Brand>
        <Navbar.List>
          <Navbar.ListItem>
            <Navbar.Link to={"/add-product"}>Add Product</Navbar.Link>
          </Navbar.ListItem>
        </Navbar.List>
        <Navbar.Actions>
          <Button mode="text" size="sm">
            <FaRegUserCircle size={25} />
          </Button>
          <Badge
            onClick={() => navigate("/cart")}
            size="xs"
            mode={"text"}
            content={totalAmount}
          >
            <FaCartShopping size={25} />
          </Badge>
        </Navbar.Actions>
      </Navbar>
      <Backdrop clickHandler={clickHandler} show={isBreaked && value} />
    </div>
  );
};

export default Navigation;
