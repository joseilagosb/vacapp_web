import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";
import { HTMLMotionProps } from "framer-motion";
import { ComponentAnimations } from "../components.types";

export type ButtonProps = {
  onClick: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
  animations?: ComponentAnimations;
} & HTMLMotionProps<"button">;

export type IconButtonProps = {
  icon: IconDefinition;
  text: string;
} & Omit<ButtonProps, "children">;

export type TextButtonProps = {
  text: string;
} & Omit<ButtonProps, "children">;
