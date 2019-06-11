import { useState } from "react";

const useDropdown = () => {
  var [isDropped, setIsDropped] = useState(false);

  return {
    isDropped,
    setIsDropped
  };
};

export default useDropdown;
