import { ButtonSize } from "@/ts/enums/components/button.enums";
import { TextButtonAlignment } from "@/ts/types/components/button.types";

export const getButtonClasses = (size: ButtonSize): string => {
  const classes = {
    size: {
      [ButtonSize.Small]: "p-2 rounded-lg text-sm",
      [ButtonSize.Medium]: "p-4 rounded-xl text-base",
      [ButtonSize.Large]: "p-8 rounded-2xl text-lg",
    },
  } as const;

  return `${classes.size[size]}`;
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
