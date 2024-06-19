import { ReactNode } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { ComponentAnimations } from "../components.types";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";

export type ModalHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: IconDefinition;
};

export type ModalTranslationProps = {
  x: number;
  y: number;
};

export type ModalProps = {
  position?: ModalPosition;
  color?: ComponentColor;
  size?: ModalSize;
  onCloseModal?: () => void;
  hasCloseButton?: boolean;
  preventCloseOnClickOutside?: boolean;
  transparentBackdrop?: boolean;
  withPaddingInBody?: boolean;
  animations?: ComponentAnimations;
  header?: ModalHeaderProps | "none";
  translation?: ModalTranslationProps | "none";
  children: ReactNode;
};
