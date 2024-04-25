import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message: "",
  status: "",
  show: false,
};
const notifySlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.show = true;
    },
    initiate(state, action) {
      state.message = initialState.message;
      state.status = initialState.status;
      state.show = initialState.show;
    },
  },
});

export const notifyActions = notifySlice.actions;

export default notifySlice;