import React from "react";
import Image from "../UI/Image";

const Product = ({ className = "", children, ...props }) => {
  return <div className={`${className}`}>{children}</div>;
};

Product.Title = ({ className = "", children, ...props }) => (
  <h4 className={`${className} text-xl font-semibold`} {...props}>
    {children}
  </h4>
);

Product.Description = ({ className = "", children, ...props }) => (
  <p className={`${className} text-base`} {...props}>
    {children}
  </p>
);
Product.Content = ({ className = "", children, ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
);

Product.Image = Image;

Product.Actions = ({ className = "", children }) => (
  <div className={`${className} flex`}>{children}</div>
);

export default Product;
