import { ButtonHTMLAttributes, ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

export type ButtonProps = {
  onClick: () => void;
  size?: ButtonSize;
  color?: ButtonColor;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type IconButtonProps = {
  icon: IconDefinition;
  text: string;
} & Omit<ButtonProps, "children">;

export type TextButtonProps = {
  text: string;
} & Omit<ButtonProps, "children">;
