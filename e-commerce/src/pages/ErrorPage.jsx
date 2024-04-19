import React from "react";
import { useLoaderData, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold">Something Went Wrong!</h1>
      <p className="text-xl font-semibold">{error.message}</p>
    </div>
  );
};

export default ErrorPage;
