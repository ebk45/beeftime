import { useState } from "react";

const useCollapsible = () => {
  const [isOpen, setIsOpen] = useState(false);

  return {
    isOpen,
    setIsOpen
  };
};

export default useCollapsible;
