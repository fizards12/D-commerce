import { cartActions} from ".";
import {
  addItemRequest,
  deleteItemRequest,
  fetchingCart,
  updateItemRequest,
} from "../../utils/cartRequest";
import { notifyActions } from "../ui/notification";
export const getCartProducts = () => async (dispatch) => {
  try {
    dispatch(
      notifyActions.setNotification({
        message: "Fetching user cart",
        status: "fetching",
        show: true,
      })
    );
    const cart = await fetchingCart();
    const totalAmount = cart.reduce((prev, c) => prev + c.amount, 0);
    const totalPrice = cart.reduce(
      (prev, c) => prev + c.product.price * c.amount,
      0
    );
    dispatch(
      cartActions.replaceState({ products: cart, totalPrice, totalAmount })
    );
    dispatch(
      notifyActions.setNotification({
        message: "User cart loaded successfully",
        status: "success",
      })
    );
  } catch (error) {
    console.log(error)
    dispatch(
      notifyActions.setNotification({
        message: error.message,
        status: "error",
      })
    );
  }

  setTimeout(() => {
    dispatch(notifyActions.initiate());
  }, 1000);
};

export const addItem = (product) => async (dispatch) => {
  dispatch(
    notifyActions.setNotification({
      message: "Adding Cart item",
      status: "sending",
      show: true,
    })
  );
  try {
    const {data} = await addItemRequest(product.id);
    dispatch(cartActions.addProduct({ ...data.item, product: product }));
    dispatch(
      notifyActions.setNotification({
        message: "Product has been added successfully",
        status: "success",
      })
    );
  } catch (error) {
    dispatch(
      notifyActions.setNotification({
        message: error.message,
        status: "error",
      })
    );
  }
  setTimeout(() => {
    dispatch(notifyActions.initiate());
  }, 1000);
};

export const deleteItem = (itemId) => async (dispatch) => {
  dispatch(
    notifyActions.setNotification({
      message: "Deleting product from cart...",
      status: "sending",
      show: true,
    })
  );
  try {
    await deleteItemRequest(itemId);
    dispatch(cartActions.removeProduct(itemId));
    dispatch(
      notifyActions.setNotification({
        message: "Product has been deleted successfully",
        status: "success",
      })
    );
  } catch (error) {
    dispatch(
      notifyActions.setNotification({
        message: error.message,
        status: "error",
      })
    );
  }
  setTimeout(() => {
    dispatch(notifyActions.initiate());
  }, 1000);
};

export const updateCart = (item)=> async (dispatch) => {
  dispatch(
    notifyActions.setNotification({
      message: "Updating cart item...",
      status: "fetching",
      show: true,
    })
  );
  try {
    await updateItemRequest(item);
    dispatch(
      notifyActions.setNotification({
        message: "Cart Item updated successfully.",
        status: "success",
      })
    );
  } catch (error) {
    dispatch(
      notifyActions.setNotification({
        message: error.message,
        status: "error",
      })
    );
  }
  setTimeout(() => {
    dispatch(notifyActions.initiate());
  }, 1500);
}
