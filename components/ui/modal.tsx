"use client";

import { useRef } from "react";
import { useEventListener } from "usehooks-ts";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ModalProps } from "@/ts/types/components/ui.types";
import { ModalSize } from "@/ts/enums/ui.enums";

import styles from "../../styles/components/ui/modal.module.scss";

const Modal = ({
  headerTitle,
  headerSubtitle,
  headerIcon,
  size = ModalSize.Medium,
  onCloseModal,
  hasCloseButton = false,
  preventCloseOnClickOutside = false,
  withPaddingInBody = true,
  children,
}: ModalProps) => {
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
  useEventListener("click", onClickOutside);

  return (
    <div className={`${styles.modalContainer}`}>
      <motion.div
        ref={modalBackdropRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={styles.backdrop}
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
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            {headerIcon && <FontAwesomeIcon className={styles.icon} icon={headerIcon} />}
            <h3 className={styles.title}>{headerTitle}</h3>
          </div>
          <h4 className={styles.subtitle}>{headerSubtitle}</h4>
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
        </div>
        <div className={`${styles.body} ${withPaddingInBody && styles.withPadding}`}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
