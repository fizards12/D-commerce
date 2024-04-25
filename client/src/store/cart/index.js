import { createSlice } from "@reduxjs/toolkit";
import apiSlice from "../api";

const initialState = {
  products: [],
  totalAmount: 0,
  totalPrice: 0,
  isChanged: false,
};

export const cartApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCart: build.query({
      query: () => "cart",
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "cart", id })),
              { type: "cart", id: "LIST" },
            ]
          : [{ type: "cart", id: "LIST" }];
      },
    }),
    addCartProduct: build.mutation({
      query: (arg) => ({
        url: "cart",
        method: "POST",
        body: arg,
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
    editCartProduct: build.mutation({
      query: ({ type, payload }) => {
        const updatedProduct = { ...payload };
        if (type === "INCREMENT") {
          updatedProduct.amount++;
          updatedProduct.totalPrice += updatedProduct.product.price;
        } else if (type === "DECREMENT") {
          if (updatedProduct.amount === 1) {
            return {
              url: `cart/${updatedProduct.id}`,
              method: "DELETE",
            };
          }
          updatedProduct.amount--;
          updatedProduct.totalPrice -= updatedProduct.product.price;
        }
        return {
          url: `cart/${updatedProduct.id}`,
          method: "PATCH",
          body: {
            type,
            amount: updatedProduct.amount,
            totalPrice: updatedProduct.totalPrice,
          },
        };
      },
      invalidatesTags: (res, err, arg) => [
        { type: "cart", id: arg.payload.id },
      ],
    }),
    removeCartProduct: build.mutation({
      query: (id) => ({
        url: `cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "cart", id: "LIST" }],
    }),
  }),
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceState(state, action) {
      (state.products = action.payload.products),
        (state.totalAmount = action.payload.totalAmount);
      state.totalPrice = action.payload.totalPrice;
    },
    increaseAmount(state, action) {
      const id = action.payload;
      const index = state.products.findIndex((p) => p.id === id);
      state.products[index].amount++;
      state.totalPrice += state.products[index].product.price;
      state.totalAmount++;
      state.isChanged = true;
    },
    addProduct(state, action) {
      const item = action.payload;
      if (
        state.products.length === 0 ||
        state.products.findIndex((p) => p.id === item.id) === -1
      ) {
        state.products.push(item);
        state.totalAmount++;
        state.totalPrice += item.product.price;
        state.isChanged = true;
      } else {
        cartSlice.caseReducers.increaseAmount(state, { payload: item.id });
      }
    },
    removeProduct(state, action) {
      const removedProduct = state.products.find(
        (p) => p.id === action.payload
      );
      state.products = state.products.filter((p) => p.id !== action.payload);
      state.totalAmount -= removedProduct.amount;
      state.totalPrice -= removedProduct.amount * removedProduct.product.price;
      state.isChanged = true;
    },
    decreaseAmount(state, action) {
      const id = action.payload;
      const index = state.products.findIndex((p) => p.id === id);
      const item = state.products[index];
      if (item.amount > 1) {
        state.totalAmount--;
        state.totalPrice -= item.product.price;
        item.amount--;
        state.isChanged = true;
      } else if (item.amount === 1) {
        cartSlice.caseReducers.removeProduct(state, { payload: id });
      }
    },
  },
});

export default cartSlice;

export const cartActions = cartSlice.actions;

// export default cartApiSlice;
