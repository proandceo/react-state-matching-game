import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const refCopy = ref;
    refCopy.current.addEventListener(mouseenter);
    return () => {};
  });

  return [ref, hovered];
};

export default useHover;
