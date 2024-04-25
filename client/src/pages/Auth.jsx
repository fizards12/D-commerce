import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Auth() {
  const location = useLocation();
  let heading = "Sign In";
  let subHeading = "create a new account";
  if (location.pathname === "/auth/register") {
    heading = "Sign Up";
    subHeading = "Do you have an account?";
  }
  return (
    <div
      className="container p-2 w-full h-full gap-6 
    xl:max-w-screen-xl flex items-center justify-center m-auto"
    >
      <div 
      className="md:justify-evenly w-full max-md:items-start items-center 
    max-md:flex-col flex gap-3">
        <div>
          <h1 className="text-4xl max-md:text-2xl font-bold">{heading}</h1>
          {
            <p className="mt-1">
              <span>{subHeading}</span>{" "}
              <Link
                className={
                  "text-blue-600 hover:text-blue-800 active:text-blue-950"
                }
                to={location.pathname.includes("register") ? "" : "register"}
              >
                Click Here
              </Link>
            </p>
          }
        </div>
        <div className="w-full md:max-w-md bg-opacity-60 bg-slate-300 rounded-md p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Auth;
