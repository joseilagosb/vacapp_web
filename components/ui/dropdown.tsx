import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useRect } from "@/hooks/use_rect";

import Modal from "./modal";
import Button from "./button";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";

import { DropdownProps } from "@/ts/types/components/dropdown.types";

import animations from "./dropdown.animations";

const Dropdown = ({ id, title, children }: DropdownProps) => {
  const dropdownKey = `dropdown-${id}`;
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { position: dropdownPosition, size: dropdownSize } = useRect(dropdownRef);
  const dropdownModalSpacing = { y: 5 };

  const dropdownModalPosition = {
    x: dropdownPosition.right - dropdownSize.width,
    y: dropdownPosition.top + dropdownSize.height + dropdownModalSpacing.y,
  };

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const onClickDropdownButton = () => setIsDropdownVisible(true);
  const onCloseDropdownModal = () => setIsDropdownVisible(false);

  return (
    <div key={dropdownKey} ref={dropdownRef} className="relative">
      <Button
        id={`${dropdownKey}-toggle-button`}
        key={`dropdown-button-${isDropdownVisible}`}
        onClick={onClickDropdownButton}
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center border rounded-lg
        bg-secondary text-gray-500 border-gray-300 
        focus:ring-2 focus:outline-none focus:ring-primary
      dark:text-white dark:border-gray-600"
        animations={animations.dropdownButton}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
      </Button>
      <AnimatePresence>
        {isDropdownVisible && (
          <Modal
            position={ModalPosition.TopRight}
            size={ModalSize.Small}
            transparentBackdrop
            onCloseModal={onCloseDropdownModal}
            translation={dropdownModalPosition}
            animations={animations.dropdownModal}
          >
            {children}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
