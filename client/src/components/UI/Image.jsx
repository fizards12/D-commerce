import React from "react";

const Image = ({ className, src, alt, ...props }) => {
  return (
    <div className={className || "w-full"}>
      <img className={"w-full"} src={src} alt={alt || ""} {...props} />
    </div>
  );
};

export default Image;
