"use client";

import { useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ModalProps, ModalHeaderProps } from "@/ts/types/components/modal.types";
import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";

import styles from "../../styles/components/ui/modal.module.scss";
import animations from "../../styles/components/ui/modal.animations";

const Modal = (props: ModalProps) => {
  const {
    position = ModalPosition.Center,
    size = ModalSize.Medium,
    onCloseModal,
    hasCloseButton = false,
    preventCloseOnClickOutside = false,
    transparentBackdrop = false,
    withPaddingInBody = true,
    modalAnimation = animations.modal,
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
    position === ModalPosition.Center ? ["centered"] : position.split(/(?=[A-Z])/);
  const positionStyles = positionClasses.reduce(
    (acc: string, position: string) => (acc += " " + styles[`position-${position.toLowerCase()}`]),
    ``
  );
  const translationStyles = props.withTranslation
    ? { margin: `${props.translationProps.y}px ${props.translationProps.x}px` }
    : {};

  return (
    <div className={`${styles.modalContainer} ${positionStyles}`}>
      <motion.div
        ref={modalBackdropRef}
        {...animations.modalBackdrop}
        className={`${styles.backdrop} ${transparentBackdrop && styles.transparent}`}
      />
      <motion.div
        {...modalAnimation}
        className={`${styles.modal} ${size && styles[`size-${size}`]}`}
        style={{ ...translationStyles }}
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
