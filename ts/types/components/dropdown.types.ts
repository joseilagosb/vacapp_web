import { ModalSize } from "@/ts/enums/components/modal.enums";
import { ReactNode } from "react";

type DropdownAlignment = "left" | "right";

export type DropdownProps = {
  id: string;
  title: string;
  size?: ModalSize;
  alignment?: DropdownAlignment;
  children: ReactNode;
};
