import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";
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

export type ModalProps = {
  position?: ModalPosition;
  size?: ModalSize;
  onCloseModal: () => void;
  hasCloseButton?: boolean;
  preventCloseOnClickOutside?: boolean;
  transparentBackdrop?: boolean;
  withPaddingInBody?: boolean;
  children: ReactNode;
} & ModalWithHeaderProps &
  ModalWithTranslationProps;

export type ModalWithHeaderProps =
  | { withHeader?: true; headerProps: ModalHeaderProps }
  | { withHeader?: false };

export type ModalWithTranslationProps =
  | {
      withTranslation?: true;
      translationProps: ModalTranslationProps;
    }
  | { withTranslation?: false };
