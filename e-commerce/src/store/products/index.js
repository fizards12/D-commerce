import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import apiSlice from "../api";

const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "products",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "products", id })),
              { type: "products", id: "LIST" },
            ]
          : [{ type: "products", id: "LIST" }],
    }),
    getProduct: build.query({
      query: (id) => `/products/${id}`,
      providesTags: (result) => [{type: "products",id: result.id || "MISSED"}]
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: "products",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "products", id: "LIST" }],
    }),
  }),
});

export default productsApiSlice;

// const initialState = {
//   items: [],
//   quantity: 0,
//   changed: false,
// };
// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     replaceState(state, action) {
//       const products = action.payload;
//       state.items = products;
//       state.quantity = products.length;
//     },
//     addProduct(state, action) {
//       const index = state.items.find((p) => p.id === action.payload.id);
//       if (!index) {
//         state.items.push(action.payload);
//         state.changed = true;
//       }
//     },
//   },
// });
// export const productsActions = productsSlice.actions;

// export const selectProductsItems = (state)=> state.products.items;
