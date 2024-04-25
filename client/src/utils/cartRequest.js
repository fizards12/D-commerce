import axios from "axios";
import { fetchingRequest } from "./fetching";
const baseURL = "http://localhost:3000/api/";
export const fetchingCart = async () => {
  try {
    const cart = await fetchingRequest("cart");
    return cart;
  } catch (error) {
    throw new Error(error);
  }
};

export const addItemRequest = async (itemId) => {
  try {
    const response = await axios.post(baseURL + "cart", { id: itemId });
    return response;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const updateItemRequest = async (item) => {
  try {
    const response = await axios.patch(baseURL + "cart/" + item.id, {
      amount: item.amount,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const deleteItemRequest = async (itemId) => {
  try {
    const response = await axios.delete(baseURL + "cart/" + itemId);
    if (response.status === 204) {
      return { message: "Cart Item Deleted Successfully" };
    }
  } catch (error) {
    throw new Error(error.data.message);
  }
};
