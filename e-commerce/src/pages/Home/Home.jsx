import React from "react";
import banner from "../../assets/banner-image.png";
import Banner from "../../components/Home/Banner";
import Categories from "../../components/Home/Categories";
// import { productsActions } from "../../store/products";
import useCustomQueries from "../../Hooks/use-customQueries";
// import { categoriesActions } from "../../store/categories";
// const queries = [
//   {
//     key: ["products"],
//     url: "products",
//     replacerAction: productsActions.replaceState,
//   },
//   {
//     key: ["categories"],
//     url: "categories",
//     replacerAction: categoriesActions.replaceState,
//   },
// ];

const Home = () => {
  // const { isLoading } = useCustomQueries(queries);
  // let content = <></>;
  // if (isLoading) {
  //   content = (
  //     <h1 className="text-center text-2xl font-bold p-3">Loading...</h1>
  //   );
  // } else {
  //   content = <Categories />;
  // }
  return (
    <div className={`w-full flex flex-col items-center`}>
      <Banner src={banner} />
      {/* {content} */}
      <Categories />
    </div>
  );
};

export default Home;
