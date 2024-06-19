import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getAnimationsObject } from "@/utils/animations";

import { ButtonProps, IconButtonProps, TextButtonProps } from "@/ts/types/components/button.types";
import { ComponentColor } from "@/ts/enums/constants.enums";
import { ButtonSize } from "@/ts/enums/components/button.enums";

import { getButtonClasses, getTextButtonClasses } from "./button.classes";

const Button = ({
  onClick,
  color = ComponentColor.Primary,
  hoverColor = color,
  size = ButtonSize.Medium,
  children,
  animations = "default",
  type,
  ...otherProps
}: ButtonProps) => {
  let buttonAnimations = getAnimationsObject(animations, {}, { initialColor: color, hoverColor });
  const buttonClasses = getButtonClasses(size);

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

export const TextButton = ({ text, alignment = "center", ...otherProps }: TextButtonProps) => {
  const textButtonClasses = getTextButtonClasses(alignment);
  const newChildren = <span className={`block ${textButtonClasses}`}>{text}</span>;

  return <Button children={newChildren} {...otherProps} />;
};

export default Button;
