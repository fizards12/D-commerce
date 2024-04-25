import { configureStore, createSelector } from "@reduxjs/toolkit";
import cartSlice from "./cart";
// import { productsSlice, selectProductsItems } from "./products";
// import { categoriesSlice, selectCategoriesTypes } from "./categories";
import apiSlice from "./api";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import notifySlice from "./ui/notification";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    notify: notifySlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//     products: productsSlice.reducer,
//     categories: categoriesSlice.reducer,
//   },
// });
// const selectorCb = (categories, products) => {
//   return {
//     categories,
//     products,
//   };
// };
// export const selectCategoriesAndProducts = createSelector(
//   [selectCategoriesTypes, selectProductsItems],
//   selectorCb
// );
export default store;
