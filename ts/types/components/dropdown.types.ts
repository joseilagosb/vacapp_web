import { ModalColor, ModalSize } from "@/ts/enums/components/modal.enums";
import { ReactNode } from "react";

type DropdownAlignment = "left" | "right";

export type DropdownProps = {
  id: string;
  title: string;
  modalSize?: ModalSize;
  modalColor?: ModalColor;
  alignment?: DropdownAlignment;
  children: ReactNode;
};
