import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { useRect } from "@/hooks/use_rect";

import Modal from "./modal";
import Button from "./button";

import { ModalPosition, ModalSize } from "@/ts/enums/components/modal.enums";

import { DropdownProps } from "@/ts/types/components/dropdown.types";
import { ButtonSize } from "@/ts/enums/components/button.enums";
import { ComponentColor } from "@/ts/enums/constants.enums";

import animations from "./dropdown.animations";

const Dropdown = ({
  title,
  modalSize = ModalSize.Small,
  modalColor = ComponentColor.Primary,
  alignment = "left",
  children,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { position: dropdownPosition, size: dropdownSize } = useRect(dropdownRef);
  const dropdownModalSpacing = { y: 5 };

  const dropdownModalPosition = {
    x: alignment === "left" ? dropdownPosition.left : dropdownPosition.right - dropdownSize.width,
    y: dropdownPosition.top + dropdownSize.height + dropdownModalSpacing.y,
  };

  const dropdownModalAlignment =
    alignment === "left" ? ModalPosition.TopLeft : ModalPosition.TopRight;

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const onClickDropdownButton = () => setIsDropdownVisible(true);
  const closeDropdownModal = () => setIsDropdownVisible(false);

  return (
    <div ref={dropdownRef} className="relative">
      <Button
        color={ComponentColor.Secondary}
        hoverColor={ComponentColor.Tertiary}
        size={ButtonSize.Small}
        key={`dropdown-button-${isDropdownVisible}`}
        onClick={onClickDropdownButton}
        animations={animations.dropdownButton}
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
      </Button>
      <AnimatePresence>
        {isDropdownVisible && (
          <Modal
            position={dropdownModalAlignment}
            size={modalSize}
            color={modalColor}
            transparentBackdrop
            onCloseModal={closeDropdownModal}
            translation={dropdownModalPosition}
            animations={animations.dropdownModal}
          >
            {typeof children === "function" ? children(closeDropdownModal) : children}
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
