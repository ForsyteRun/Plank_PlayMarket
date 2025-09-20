import { useState } from "react";

export const useOpen = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return { isOpen, handleOpen };
};
