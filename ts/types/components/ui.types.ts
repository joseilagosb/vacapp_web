import { ModalSize } from "@/ts/enums/ui.enums";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ModalHeaderProps = {
  headerTitle: string;
  headerSubtitle?: string;
  headerIcon?: IconDefinition | null;
};

export type ModalProps = {
  size?: ModalSize;
  onCloseModal: () => void;
  hasCloseButton?: boolean;
  preventCloseOnClickOutside?: boolean;
  transparentBackdrop?: boolean;
  withPaddingInBody?: boolean;
  children: ReactNode;
} & ModalWithHeaderProps;
type ModalWithHeaderProps = ({ withHeader?: true } & ModalHeaderProps) | { withHeader?: false };
