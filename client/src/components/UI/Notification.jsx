import React from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const Notification = () => {
  const notification = useSelector((state) => state.notify);
  return (
    notification.show &&
    createPortal(
      <Notification.Body message={notification.message} status={notification.status} />,
      document.getElementById("notification")
    )
  );
};

Notification.Body = ({ message, status }) => {
  let classes = "bg-blue-700";
  if (status === "success") {
    classes = "bg-green-700";
  }
  if (status === "warning") {
    classes = "bg-amber-600";
  }
  if (status === "error") {
    classes = "bg-rose-700";
  }
  return (
    <div
      className={`${classes} bg-opacity-85 p-2 text-blue-50 text-center text-lg w-full`}
    >
      {message}
    </div>
  );
};
export default Notification;
