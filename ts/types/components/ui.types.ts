import { ReactNode } from "react";

export type ModalProps = {
  headerTitle: string;
  headerSubtitle: string;
  headerIcon: string | null;
  headerBackgroundColor?: string;
  headerTextColor?: string;
  borderRadius?: string;
  size: string | null;
  isVisible?: boolean;
  onCloseModal: () => void;
  hasCloseButton?: boolean;
  preventCloseOnClickOutside?: boolean;
  children: ReactNode;
};
