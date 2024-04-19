import axios from "axios";
import { json } from "react-router-dom";
const baseURL = "http://localhost:3000/api/";
export const fetchingRequest = async (url) => {
  try {
    const response = await axios.get(baseURL + url);
    if (response.status !== 200) {
      throw response.data.message;
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendRequest = async (options) => {
  try {
    const response = await axios(options);
  } catch (error) {
    throw error;
  }
};
export const fetchProductsAndCategories = async () => {
  try {
    const products = await fetchingRequest("products");
    const categories = await fetchingRequest("categories");
    return { products, categories };
  } catch (err) {
    throw json({ message: "Error: " + err.message });
  }
};
