"use client";

import { useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ModalProps,
  ModalOptionalProps,
  ModalHeaderProps,
} from "@/ts/types/components/modal.types";
import { ModalPosition, ModalSize } from "@/ts/enums/ui.enums";

import styles from "../../styles/components/ui/modal.module.scss";

const Modal = (props: ModalProps) => {
  const {
    position,
    size,
    onCloseModal,
    hasCloseButton,
    preventCloseOnClickOutside,
    transparentBackdrop,
    withPaddingInBody,
    children,
  } = props;
  const modalBackdropRef = useRef<HTMLDivElement>(null);

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

  const positionClasses =
    position === ModalPosition.Center ? [position] : position.split(/(?=[A-Z])/);
  const positionStyles = positionClasses.reduce(
    (acc, position) => (acc += " " + styles[`position-${position.toLowerCase()}`]),
    ``
  );
  const translationStyles = props.translateModal
    ? {
        transform: `translate(${props.translationProps.x}px, ${props.translationProps.y}px)`,
      }
    : {};

  return (
    <div className={`${styles.modalContainer} ${positionStyles}`} style={{ ...translationStyles }}>
      <motion.div
        ref={modalBackdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`${styles.backdrop} ${transparentBackdrop && styles.transparent}`}
      />
      <motion.div
        initial={{ rotate: 270, scale: 0, opacity: 0 }}
        animate={{ rotate: 360, scale: 1, opacity: 1 }}
        exit={{ rotate: 180, scale: 0, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`${styles.modal} ${size && styles[`size-${size}`]}`}
      >
        {props.withHeader && <ModalHeader {...props.headerProps} />}
        {hasCloseButton && (
          <motion.button
            whileHover={{
              scale: 1.4,
              transition: { duration: 0.3 },
            }}
            className={styles.closeButton}
            onClick={onCloseModal}
          >
            &times;
          </motion.button>
        )}
        <div className={`${styles.body} ${withPaddingInBody && styles.withPadding}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

Modal.defaultProps = {
  withHeader: true,
  position: ModalPosition.Center,
  size: ModalSize.Medium,
  hasCloseButton: false,
  preventCloseOnClickOutside: false,
  transparentBackdrop: false,
  withPaddingInBody: true,
  translateModal: false,
} as ModalOptionalProps;

const ModalHeader = ({ title, subtitle, icon }: ModalHeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.titleContainer}>
        {icon && <FontAwesomeIcon className={styles.icon} icon={icon} />}
        <h3 className={styles.title}>{title}</h3>
      </div>
      {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
    </div>
  );
};

export default Modal;
