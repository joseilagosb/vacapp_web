import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";
import { HTMLMotionProps } from "framer-motion";
import { ComponentAnimations } from "../components.types";

export type ButtonProps = {
  onClick: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  hoverColor?: ButtonColor;
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
