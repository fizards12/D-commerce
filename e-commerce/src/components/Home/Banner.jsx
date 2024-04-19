import React from "react";
import Image from "../UI/Image";

const Banner = ({src,className}) => {
  return (
    <div className={`${className} w-full p-10 flex justify-center bg-slate-200`}>
      <Image className={" max-w-lg w-full"} src={src} alt={"banner"} />
    </div>
  );
};

export default Banner;
