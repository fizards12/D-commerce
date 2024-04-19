import React, { useEffect, useState } from "react";
import Category from "../Products/Category";
import productsApiSlice from "../../store/products";
import categoriesApiSlice from "../../store/categories";
import { useSelector } from "react-redux";
import { cartApiSlice } from "../../store/cart";
// import { useSelector } from "react-redux";
// import { selectCategoriesAndProducts } from "../../store";
const Categories = () => {
  const { isLoading: Loading, data: products } =
    productsApiSlice.useGetProductsQuery();
  const { isLoading, data: categories } =
    categoriesApiSlice.useGetCategoriesQuery();
  
  useEffect(() => {
    console.log(products, categories);
  });
  if (isLoading || Loading) {
    return <h1 className={`text-center text-3xl`}>Loading...</h1>;
  }
  // const {products, categories} = useSelector((state)=>selectCategoriesAndProducts(state))
  return (
    <div className={"w-full max-xl:container xl:p-10"}>
      {categories.map((category) => (
        <Category key={category}>
          <Category.Title>{category.toUpperCase()}</Category.Title>
          <Category.Body>
            <Category.Products className={"max-lg:flex-col"}>
              {products.map((p) => {
                if (p.category.name === category) {
                  return <Category.Product key={p.id} product={p} />;
                }
              })}
            </Category.Products>
          </Category.Body>
        </Category>
      ))}
    </div>
  );
};

export default Categories;
