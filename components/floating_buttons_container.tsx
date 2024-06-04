import React, { PropsWithChildren } from "react";

const FloatingButtonsContainer = ({ children }: PropsWithChildren) => {
  return <div className="absolute bottom-8 right-8 flex flex-col gap-2">{children}</div>;
};

export default FloatingButtonsContainer;
