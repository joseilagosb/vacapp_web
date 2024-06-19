import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ButtonSize } from "@/ts/enums/components/button.enums";
import { HTMLMotionProps } from "framer-motion";
import { ComponentAnimations } from "../components.types";
import { ComponentColor } from "@/ts/enums/constants.enums";

export type ButtonProps = {
  onClick: () => void;
  size?: ButtonSize;
  color?: ComponentColor;
  hoverColor?: ComponentColor;
  children: ReactNode;
  animations?: ComponentAnimations;
} & HTMLMotionProps<"button">;

export type IconButtonProps = {
  icon: IconDefinition;
  text: string;
} & Omit<ButtonProps, "children">;

export type TextButtonAlignment = "left" | "center" | "right";

export type TextButtonProps = {
  text: string;
  alignment?: TextButtonAlignment;
} & Omit<ButtonProps, "children">;
