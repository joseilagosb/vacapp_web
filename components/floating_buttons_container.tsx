import React, { PropsWithChildren } from "react";

import styles from "../styles/components/floating_buttons_container.module.scss";

const FloatingButtonsContainer = ({ children }: PropsWithChildren) => {
  return <div className={styles.floatingButtonsContainer}>{children}</div>;
};

export default FloatingButtonsContainer;
