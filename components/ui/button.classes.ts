import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

export const getButtonClasses = (color: ButtonColor, size: ButtonSize): string => {
  const classes = {
    color: {
      [ButtonColor.Primary]: "bg-primary",
      [ButtonColor.Secondary]: "bg-secondary",
      [ButtonColor.Tertiary]: "bg-tertiary",
      [ButtonColor.Transparent]: "bg-transparent",
      [ButtonColor.Alert]: "bg-red-500",
    },
    size: {
      [ButtonSize.Small]: "p-2 rounded-lg text-sm",
      [ButtonSize.Medium]: "p-4 rounded-xl text-base",
      [ButtonSize.Large]: "p-8 rounded-2xl text-lg",
    },
  } as const;

  return `${classes.color[color]} ${classes.size[size]}`;
};
