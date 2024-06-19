import { ModalColor, ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";

export const getModalContainerClasses = (position: ModalPosition): string => {
  const classes = {
    position: {
      top: "items-start",
      bottom: "items-end",
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
      centered: "items-center justify-center",
    },
  };

  const positionClasses =
    position === ModalPosition.Center ? ["centered"] : position.split(/(?=[A-Z])/);

  return positionClasses.reduce((acc: string, position: string) => {
    const lowercasePosition = position.toLowerCase() as keyof typeof classes.position;
    return (acc += " " + classes.position[lowercasePosition]);
  }, ``);
};

export const getModalClasses = (size: ModalSize): string => {
  const classes = {
    size: {
      [ModalSize.ExtraSmall]: "w-48",
      [ModalSize.Small]: "w-96",
      [ModalSize.Medium]: "w-192",
      [ModalSize.Large]: "w-384",
    },
  };

  return `${classes.size[size]}`;
};
