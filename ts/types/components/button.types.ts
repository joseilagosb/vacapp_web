import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";
import { HTMLMotionProps, MotionProps } from "framer-motion";

export type ButtonAnimations = MotionProps | "default" | "none";
export type ButtonProps = {
  onClick: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
  animations?: ButtonAnimations;
} & HTMLMotionProps<"button">;

export type IconButtonProps = {
  icon: IconDefinition;
  text: string;
} & Omit<ButtonProps, "children">;

export type TextButtonProps = {
  text: string;
} & Omit<ButtonProps, "children">;
