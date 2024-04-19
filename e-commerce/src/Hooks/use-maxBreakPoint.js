import { useEffect, useState } from "react";

const useMaxBreakPoint = (breakPoint) => {
  const [breaked, setIsBreaked] = useState(false);
  useEffect(() => {
    const checkSize = () => {
      const currentWidth = +window.innerWidth;
      if (breakPoint && !isNaN(+breakPoint) && currentWidth < (+breakPoint)) {
        setIsBreaked(true);
      } else {
        setIsBreaked(false);
      }
    };
    window.onload = window.onresize = checkSize;
    return () => {
      document.onload = document.onresize = () => {};
    };
  }, []);
  return breaked;
};

export default useMaxBreakPoint;
