import React from "react";
import { NavLink } from "react-router-dom";
import { TfiMenuAlt } from "react-icons/tfi";
import Button from "../Button/Button";

const Navbar = ({ children, className = "", ...props }) => {
  return (
    <nav
      {...props}
      className={`${className} 
      flex justify-center w-full 
      text-gray-950 shadow-md 
      border-b-2
      relative
      `}
    >
      <div
        className={`max-w-screen-xl w-full flex justify-between items-center`}
      >
        {children}
      </div>
    </nav>
  );
};

Navbar.Brand = ({
  Logo,
  className = "",
  LogoClass = "",
  title="",
  children,
  ...props
}) => {
  return (
    <div
      className={`${className} flex text-center gap-2 items-center text-3xl p-5`}
      {...props}
    >
      {Logo && <img src={Logo} className={`${className} h-full p-2`} />}
      {children}
      <h1 className={`hidden md:block font-bold`}>{title}</h1>
    </div>
  );
};

Navbar.List = ({show=true, children, className = "", ...props }) => {
  return show && (
    <ul
      {...props}
      className={`${className} list-none flex items-center justify-between
         max-md:flex-col 
         max-md:items-start 
         max-md:w-full 
         max-md:min-h-max
         max-md:absolute
         max-md:top-0
         max-md:z-30
       max-md:bg-slate-800
       max-md:text-slate-200`}
    >
      {children}
    </ul>
  );
};

Navbar.ListItem = ({ children, className = "", ...props }) => {
  return (
    <li
      {...props}
      className={`${className} 
       hover:text-gray-300 
         flex 
         max-md:w-full 
       max-md:hover:bg-gray-900 
         max-md:hover:text-current`}
    >
      {children}
    </li>
  );
};

Navbar.Link = ({ children, activeClass, className = "", ...props }) => {
  let active = activeClass || `md:font-bold max-md:bg-gray-950`;
  return (
    <NavLink
      className={({ isActive }) => `${className} lg:bg- p-4 w-full ` + (isActive ? active : "")}
      {...props}
    >
      {children}
    </NavLink>
  );
};

Navbar.Actions = ({ children, className = "", ...props }) => {
  return (
    <div className={`${className} flex items-center gap-2 me-6`} {...props}>
      {children}
    </div>
  );
};

Navbar.MenuIcon = ({ children, className = "", ...props }) => {
  return (
    <Button
      mode="text"
      size="sm"
      className={`${className} p-0 rounded-lg`}
      {...props}
    >
      <TfiMenuAlt size={20} />
    </Button>
  );
};

export default Navbar;
