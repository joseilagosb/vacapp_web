import { ModalPosition, ModalSize } from "@/ts/enums/ui.enums";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ModalHeaderProps = {
  title: string;
  subtitle?: string;
  icon?: IconDefinition;
};

export type ModalTranslationProps = {
  x: number;
  y: number;
};

export type ModalOptionalProps = {
  position: ModalPosition;
  size: ModalSize;
  hasCloseButton: boolean;
  preventCloseOnClickOutside: boolean;
  transparentBackdrop: boolean;
  withPaddingInBody: boolean;
};

export type ModalProps = {
  onCloseModal: () => void;
  children: ReactNode;
} & ModalOptionalProps &
  ModalWithHeaderProps &
  ModalWithTranslationProps;

type ModalWithHeaderProps =
  | { withHeader?: true; headerProps: ModalHeaderProps }
  | { withHeader?: false };

type ModalWithTranslationProps =
  | {
      translateModal?: true;
      translationProps: ModalTranslationProps;
    }
  | { translateModal?: false };
