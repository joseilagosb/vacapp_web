import { ComponentAnimations } from "@/ts/types/components.types";
import { MotionProps } from "framer-motion";

export const capitalize = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getAnimationsObj = (
  animations: ComponentAnimations,
  defaultAnimations: MotionProps
) => {
  if (animations === "none") {
    return {};
  } else if (animations === "default") {
    return defaultAnimations;
  } else {
    return { ...defaultAnimations, ...animations };
  }
};
