import { ModalSize } from "@/ts/enums/ui.enums";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export type ModalProps = {
  headerTitle: string;
  headerSubtitle: string;
  headerIcon: IconDefinition | null;
  size?: ModalSize;
  onCloseModal: () => void;
  hasCloseButton?: boolean;
  preventCloseOnClickOutside?: boolean;
  withPaddingInBody?: boolean;
  children: ReactNode;
};
