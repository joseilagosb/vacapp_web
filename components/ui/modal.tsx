"use client";

import { useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { motion, useIsPresent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ModalProps, ModalHeaderProps } from "@/ts/types/components/modal.types";
import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";

import { getModalClasses, getModalContainerClasses } from "./modal.classes";
import defaultAnimations from "./modal.animations";
import { getAnimationsObj } from "@/utils/common";

const Modal = ({
  position = ModalPosition.Center,
  size = ModalSize.Medium,
  onCloseModal = () => {},
  hasCloseButton = false,
  preventCloseOnClickOutside = false,
  transparentBackdrop = false,
  withPaddingInBody = true,
  animations = "default",
  header = "none",
  translation = "none",
  children,
}: ModalProps) => {
  const modalBackdropRef = useRef<HTMLDivElement>(null);
  const modalAnimations = getAnimationsObj(animations, defaultAnimations.modal);

  const isPresent = useIsPresent();

  const onClickOutside = (event: MouseEvent) => {
    event.stopPropagation();
    if (preventCloseOnClickOutside) {
      return;
    }
    if (!modalBackdropRef?.current?.contains(event.target as Node)) {
      return;
    }
    onCloseModal();
  };

  const onPressKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onCloseModal();
    }
  };

  useEventListener("click", onClickOutside);
  useEventListener("keyup", onPressKey);

  const modalContainerClasses = getModalContainerClasses(position);
  const modalClasses = getModalClasses(size);

  const translationStyles =
    translation != "none" ? { margin: `${translation.y}px ${translation.x}px` } : {};

  return (
    <div className={`fixed inset-0 overflow-hidden h-full flex ${modalContainerClasses}`}>
      <motion.div
        ref={modalBackdropRef}
        {...defaultAnimations.modalBackdrop}
        className={`absolute inset-0 z-10 bg-opacity-50 h-full ${
          transparentBackdrop ? "bg-transparent" : "bg-gray-600"
        }`}
      />
      <motion.div
        {...modalAnimations}
        className={`z-20 shadow-lg rounded-xl bg-primary relative overflow-hidden ${modalClasses}`}
        style={{ ...translationStyles, pointerEvents: isPresent ? "auto" : "none" }}
      >
        {header != "none" && <ModalHeader {...header} />}
        {hasCloseButton && (
          <motion.button
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.3 },
            }}
            className="absolute right-0 top-0 px-4 py-2 text-gray-700 text-2xl"
            onClick={onCloseModal}
          >
            &times;
          </motion.button>
        )}
        <div className={`${withPaddingInBody && "p-4"}`}>{children}</div>
      </motion.div>
    </div>
  );
};

const ModalHeader = ({ title, subtitle, icon }: ModalHeaderProps) => {
  return (
    <div className="bg-secondary w-full p-4 relative">
      <div className="flex flex-row items-center gap-2">
        {icon && <FontAwesomeIcon className="text-gray-900" icon={icon} />}
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      {subtitle && <h4 className="text-lg text-gray-700">{subtitle}</h4>}
    </div>
  );
};

export default Modal;
