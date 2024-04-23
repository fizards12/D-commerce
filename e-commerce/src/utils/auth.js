import axios from "axios";
import store from "../store";
import { notifyActions } from "../store/ui/notification";
export function saveToken(token) {
  localStorage.setItem("token", token);
}
export function saveUserID(userId) {
  localStorage.setItem("user_id", userId);
}

function getUserID() {
  const userId = localStorage.getItem("user_id");
  if (!userId) {
    return null;
  }
  return userId;
}

export function getToken() {
  let token = localStorage.getItem("token");

  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration <= 0) {
    fetchNewAccessToken().then((result) => {
      token = result;
    });
  }
  return token;
}

export function saveTokenExpiration() {
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());
}

export function getTokenDuration() {
  const expiration = localStorage.getItem("expiration");
  const now = new Date();
  const duration = expiration.getTime() - now.getTime();
  return duration;
}

async function fetchNewAccessToken() {
  try {
    const userId = getUserID();
    if (!userId) {
      return null;
    }
    const newAccessToken = await axios.post(
      "http:localhost:3000/api/users/token",
      { id: userId }
    );
    saveTokenExpiration();
    saveToken(newAccessToken);
  } catch (error) {
    store.dispatch(
      notifyActions.setNotification({
        status: "error",
        message: error.message,
        show: true,
      })
    );
  }
  setTimeout(() => {
    store.dispatch(notifyActions.initiate());
  }, 1000);
}
