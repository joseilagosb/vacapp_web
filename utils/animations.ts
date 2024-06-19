import { MotionProps } from "framer-motion";

import { deepMerge } from "./common";

import { ComponentColor } from "@/ts/enums/constants.enums";
import { ComponentAnimations } from "@/ts/types/components.types";

const getColorValue = (color: ComponentColor) => {
  switch (color) {
    case ComponentColor.Transparent:
      return ComponentColor.Transparent;
    default:
      return `var(--${color}-color)`;
  }
};

const getColoringAnimations = (color: ComponentColor, hoverColor?: ComponentColor): MotionProps => {
  return {
    initial: {
      backgroundColor: getColorValue(color),
    },
    ...(hoverColor && {
      whileHover: {
        backgroundColor: getColorValue(hoverColor),
      },
    }),
  };
};

export const getAnimationsObject = (
  componentAnimations: ComponentAnimations,
  defaultAnimations: MotionProps,
  {
    discardDefault = false,
    initialColor,
    hoverColor,
  }: { discardDefault?: boolean; initialColor: ComponentColor; hoverColor?: ComponentColor }
) => {
  if (componentAnimations === "none") {
    return {};
  }

  const coloringAnimations = getColoringAnimations(initialColor, hoverColor);

  if (componentAnimations === "default") {
    return deepMerge({}, defaultAnimations, coloringAnimations);
  }

  return deepMerge(
    {},
    discardDefault ? {} : defaultAnimations,
    componentAnimations,
    coloringAnimations
  );
};
