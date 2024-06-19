import { ReactNode } from "react";

import { ModalSize } from "@/ts/enums/components/modal.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";

type DropdownAlignment = "left" | "right";

export type DropdownProps = {
  id: string;
  title: string;
  modalSize?: ModalSize;
  modalColor?: ComponentColor;
  alignment?: DropdownAlignment;
  children: ReactNode;
};
