"use client";

import { useRef } from "react";
import { useEventListener } from "usehooks-ts";

import { ModalProps } from "@/ts/types/components/ui.types";

import styles from "../../styles/components/ui/modal.module.scss";

const Modal = ({
  headerTitle,
  headerSubtitle,
  headerIcon,
  headerBackgroundColor = "primary",
  headerTextColor = "white",
  borderRadius = "xl",
  size,
  isVisible = false,
  onCloseModal,
  hasCloseButton = false,
  preventCloseOnClickOutside = false,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBodyRef = useRef<HTMLDivElement>(null);
  const onClickOutside = (event: MouseEvent) => {
    event.stopPropagation();
    if (preventCloseOnClickOutside) {
      return;
    }
    if (modalBodyRef?.current?.contains(event.target as Node)) {
      return;
    }
    if (modalRef?.current != event.target) {
      return;
    }
    closeModal();
  };

  const closeModal = () => {
    onCloseModal();
  };

  useEventListener("click", onClickOutside);

  return (
    <div className={`${styles.modal}`}>
      <div className={styles.header}>{headerTitle}</div>
      <div ref={modalBodyRef} className={`${styles.body} rounded-xl`}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">{headerTitle}</h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-lg text-gray-500">{headerSubtitle}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
