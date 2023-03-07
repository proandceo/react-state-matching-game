import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  const enter = () => {
    setHovered(true);
  };
  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener("mouseenter", enter);
    refCopy.current.addEventListener("mouseleave", () => {});
    return () => {};
  });

  return [ref, hovered];
};

export default useHover;
