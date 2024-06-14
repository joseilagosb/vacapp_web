import { RefObject, useEffect, useState } from "react";
import { useWindowSize } from "usehooks-ts";

type Rect = {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
};

export const useRect = (ref: RefObject<HTMLElement>) => {
  const [rect, setRect] = useState<Rect>({});
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    setRect({ top, left, right: windowWidth - left, bottom: windowHeight - top, width, height });
  }, []);

  return {
    position: {
      top: rect.top ?? 0,
      left: rect.left ?? 0,
      right: rect.right ?? 0,
      bottom: rect.bottom ?? 0,
    },
    size: { width: rect.width ?? 0, height: rect.height ?? 0 },
  };
};
