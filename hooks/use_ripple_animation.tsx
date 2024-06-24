import { getCurrentRect } from "@/utils/common";
import { RefObject } from "react";
import { useEventListener } from "usehooks-ts";

// Esta función inserta el contenedor del elemento que hace el efecto ripple sobre la totalidad del elemento
// presionado. Para ello añade el ripple container después del elemento, iniciando inmediatamente la animación
const appendRippleContainer = (event: MouseEvent) => {
  const element = event.currentTarget as HTMLElement;

  const rippleContainer = document.createElement("div");
  rippleContainer.classList.add("ripple-container");
  const diameter = Math.max(element.clientWidth, element.clientHeight);
  const radius = diameter / 2;
  const { top: currentRectTop, left: currentRectLeft } = getCurrentRect(element);

  rippleContainer.style.width = rippleContainer.style.height = `${diameter}px`;
  rippleContainer.style.left = `${event.clientX - currentRectLeft - radius}px`;
  rippleContainer.style.top = `${event.clientY - currentRectTop - radius}px`;
  rippleContainer.classList.add("ripple");

  const ripple = element.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  element.appendChild(rippleContainer);
};

// Inserta una animación ripple (similar a los botones de las apps android) al elemento HTML contenido en el ref.
// Esta animación se acciona al hacer clic sobre el elemento o al mantenerlo presionado
export const useRippleAnimation = (ref: RefObject<HTMLElement>) => {
  useEventListener("mousedown", appendRippleContainer, ref);
};
