import { useEffect, useRef, useState } from "react";

const useHover = () => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useEffect = () => {
    return;
  };

  return { ref, hovered };
};

export default useHover;
