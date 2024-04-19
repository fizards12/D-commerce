import React from "react";

const Products = ({ className, children, ...props }) => {
  return (
    <div className={`${className} flex flex-wrap gap-4`} {...props}>
      {children}
    </div>
  );
};

export default Products;
