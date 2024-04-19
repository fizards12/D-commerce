import React from "react";
import Products from "./Products";
import Product from "./Product";
import { FaCartPlus } from "react-icons/fa";
import Button from "../UI/Button/Button";
import useCartProductActions from "../../Hooks/use-cartProductActions";
import { cartApiSlice } from "../../store/cart";
const Category = ({ className = "", children, ...props }) => {
  return (
    <div className={`${className} flex flex-col container m-auto gap-4 w-full`} {...props}>
      {children}
    </div>
  );
};

Category.Title = ({ className = "", children, ...props }) => (
  <h3 className={`${className} text-4xl font-bold`} {...props}>
    {children}
  </h3>
);

Category.Body = ({ className = "w-full md:p-4", children, ...props }) => (
  <div className={`${className} flex justify-center `} {...props}>
    {children}
  </div>
);
Category.Products = Products;
Category.Product = ({ product, className, ...props }) => {
  const {name,image,price} = product;
  const {addToCart} = useCartProductActions(product);
  return(
  <Product className={`${className} max-w-60 w-auto`} {...props}>
    <Product.Image src={image} alt={name} />
    <Product.Content className="flex items-center justify-between py-2 px-1">
      <Product.Title className="px-1">{name}</Product.Title>
      <Product.Description className={`text-slate-500`}>${price}</Product.Description>
    </Product.Content>
    <Product.Actions className="gap-3">
      <Button
        size="xs"
        onClick={()=>{
          addToCart()
        }}
        className="flex gap-2 font-semibold justify-center items-center w-full"
      >
        <FaCartPlus size={25} />
        <span> Add To Cart</span>
      </Button>
    </Product.Actions>
  </Product>
)};
export default Category;
