import React, { useState } from "react";

const useToggle = (initValue) => {
  const [value, setValue] = useState(initValue || false);
  const toggleHandler = () => {
    setValue((st) => !st);
  };
  return[value,toggleHandler];
};

export default useToggle;
