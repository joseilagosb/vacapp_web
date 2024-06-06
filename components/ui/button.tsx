import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getAnimationsObj } from "@/utils/common";

import { ButtonProps, IconButtonProps, TextButtonProps } from "@/ts/types/components/button.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import { getButtonClasses } from "./button.classes";
import defaultAnimations from "./button.animations";

const Button = ({
  onClick,
  color = ButtonColor.Primary,
  size = ButtonSize.Medium,
  children,
  animations = "default",
  type,
  ...otherProps
}: ButtonProps) => {
  let buttonAnimations = getAnimationsObj(animations, defaultAnimations.button);
  const buttonClasses = getButtonClasses(color, size);

  return (
    <motion.button
      className={`${buttonClasses} disabled:bg-gray-600 disabled:text-gray-400`}
      onClick={onClick}
      {...buttonAnimations}
      {...otherProps}
    >
      {children}
    </motion.button>
  );
};

export const IconButton = ({ icon, text, ...otherProps }: IconButtonProps) => {
  const newChildren = (
    <>
      <FontAwesomeIcon icon={icon} className="mr-2" />
      <span>{text}</span>
    </>
  );

  return <Button children={newChildren} {...otherProps} />;
};

export const TextButton = ({ text, ...otherProps }: TextButtonProps) => {
  const newChildren = <span>{text}</span>;

  return <Button children={newChildren} {...otherProps} />;
};

export default Button;
