import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getAnimationsObj } from "@/utils/common";

import { ButtonProps, IconButtonProps, TextButtonProps } from "@/ts/types/components/button.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import styles from "../../styles/components/ui/button.module.scss";
import defaultAnimations from "../../styles/components/ui/button.animations";

const Button = ({
  onClick,
  color = ButtonColor.Primary,
  size = ButtonSize.Medium,
  children,
  animations = "default",
  type,
  ...otherProps
}: ButtonProps) => {
  let buttonAnimations = getAnimationsObj(animations, defaultAnimations);

  return (
    <motion.button
      className={`${styles.button} ${styles[`size-${size}`]} ${styles[`color-${color}`]}`}
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
    <div className={styles.iconButton}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );

  return <Button children={newChildren} {...otherProps} />;
};

export const TextButton = ({ text, ...otherProps }: TextButtonProps) => {
  const newChildren = <span>{text}</span>;

  return <Button children={newChildren} {...otherProps} />;
};

export default Button;
