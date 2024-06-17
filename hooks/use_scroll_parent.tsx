import { RefObject, useEffect, useRef } from "react";

// Realiza una iteración sobre los padres del nodo inicial hasta encontrar uno que sea scrolleable
const getScrollParent = (node: HTMLElement) => {
  if (node === null) {
    return null;
  }

  let currentNode: HTMLElement = node;
  while (currentNode.parentNode) {
    if (currentNode.scrollHeight > currentNode.clientHeight) {
      return currentNode;
    }
    currentNode = currentNode.parentNode as HTMLElement;
  }

  return document.body;
};

// Retorna el elemento del DOM scrolleable más cercano al elemento
export const useScrollParent = (element: RefObject<HTMLElement>) => {
  const scrollParentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (element && element.current) {
      scrollParentRef.current = getScrollParent(element.current);
    }
  }, []);

  return scrollParentRef;
};
