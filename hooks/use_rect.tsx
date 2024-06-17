import { RefObject, useEffect, useState } from "react";
import { useEventListener, useWindowSize } from "usehooks-ts";

import { useScrollParent } from "./use_scroll_parent";

import { Rect } from "@/ts/types/utils.types";

// Retorna la ubicación y el tamaño de un elemento en el DOM
// Los valores se actualizan automáticamente al redimensionar la pantalla o al scrollear la página
export const useRect = (element: RefObject<HTMLElement>) => {
  const [rect, setRect] = useState<Rect>({});
  const { width: windowWidth, height: windowHeight } = useWindowSize();

  const updateRect = () => {
    if (element && element.current) {
      const { top, left, width, height } = element.current.getBoundingClientRect();
      setRect({ top, left, right: windowWidth - left, bottom: windowHeight - top, width, height });
    }
  };

  const scrollParent = useScrollParent(element);

  useEventListener("resize", updateRect);
  useEventListener("scroll", updateRect, scrollParent);

  useEffect(() => {
    updateRect();
  }, [element]);

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
