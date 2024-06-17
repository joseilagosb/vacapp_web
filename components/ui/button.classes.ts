import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";
import { TextButtonAlignment } from "@/ts/types/components/button.types";

export const getButtonClasses = (
  color: ButtonColor,
  hoverColor: ButtonColor,
  size: ButtonSize
): string => {
  const classes = {
    color: {
      [ButtonColor.Primary]: "bg-primary",
      [ButtonColor.Secondary]: "bg-secondary",
      [ButtonColor.Tertiary]: "bg-tertiary",
      [ButtonColor.Transparent]: "bg-transparent",
      [ButtonColor.Alert]: "bg-red-500",
    },
    hoverColor: {
      [ButtonColor.Primary]: "hover:bg-primary",
      [ButtonColor.Secondary]: "hover:bg-secondary",
      [ButtonColor.Tertiary]: "hover:bg-tertiary",
      [ButtonColor.Transparent]: "hover:bg-transparent",
      [ButtonColor.Alert]: "hover:bg-red-500",
    },
    size: {
      [ButtonSize.Small]: "p-2 rounded-lg text-sm",
      [ButtonSize.Medium]: "p-4 rounded-xl text-base",
      [ButtonSize.Large]: "p-8 rounded-2xl text-lg",
    },
  } as const;

  return `${classes.color[color]} ${classes.hoverColor[hoverColor]} ${classes.size[size]}`;
};

export const getTextButtonClasses = (alignment: TextButtonAlignment): string => {
  const classes = {
    alignment: {
      left: "text-start",
      center: "text-center",
      right: "text-end",
    },
  };
  return `${classes.alignment[alignment]}`;
};
