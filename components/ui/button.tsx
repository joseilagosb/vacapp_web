import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ButtonProps, IconButtonProps, TextButtonProps } from "@/ts/types/components/button.types";
import { ButtonColor, ButtonSize } from "@/ts/enums/components/button.enums";

import styles from "../../styles/components/ui/button.module.scss";

const Button = (props: ButtonProps) => {
  const { onClick, color = ButtonColor.Primary, size = ButtonSize.Medium, children } = props;

  return (
    <button
      className={`${styles.button} ${styles[`size-${size}`]} ${styles[`color-${color}`]}`}
      onClick={onClick}
    >
      {children}
    </button>
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
