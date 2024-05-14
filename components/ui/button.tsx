import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ButtonAnimations,
  ButtonProps,
  IconButtonProps,
  TextButtonProps,
} from "@/ts/types/components/button.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import styles from "../../styles/components/ui/button.module.scss";
import defaultAnimations from "../../styles/components/ui/button.animations";

const getButtonAnimations = (animations: ButtonAnimations) => {
  if (animations === "none") {
    return {};
  } else if (animations === "default") {
    return defaultAnimations;
  } else {
    return { ...defaultAnimations.button, ...animations };
  }
};

const Button = (props: ButtonProps) => {
  const {
    onClick,
    color = ButtonColor.Primary,
    size = ButtonSize.Medium,
    children,
    animations = "default",
    type,
    ...otherProps
  } = props;

  let buttonAnimations = getButtonAnimations(animations);

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

export const IconButton = (props: IconButtonProps) => {
  const { icon, text, ...otherProps } = props;

  const newChildren = (
    <div className={styles.iconButton}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );

  return <Button children={newChildren} {...otherProps} />;
};

export const TextButton = (props: TextButtonProps) => {
  const { text, ...otherProps } = props;

  const newChildren = <span>{text}</span>;

  return <Button children={newChildren} {...otherProps} />;
};

export default Button;
