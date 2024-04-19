import apiSlice from "../api";

const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "categories",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "categories", id })),
              { type: "categories", id: "LIST" },
            ]
          : [{ type: "categories", id: "LIST" }],
    }),
  }),
});

export default categoriesApiSlice;

// import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// const initialState = {
//   types: [],
//   quantity: 0,
//   changed: false,
// };
// export const categoriesSlice = createSlice({
//   name: "categories",
//   initialState,
//   reducers: {
//     replaceState(state, action) {
//       const categories = action.payload;
//       state.types = categories;
//       state.quantity = categories.length;
//     },
//     addCategory(state, action) {
//       const index = state.types.find((p) => p.id === action.payload.id);
//       if (!index) {
//         state.types.push(action.payload);
//         state.changed = true;
//       }
//     },
//   },
// });
// export const categoriesActions = categoriesSlice.actions;

// export const selectCategoriesTypes = (state)=> state.categories.types;
