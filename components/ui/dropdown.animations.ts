import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  dropdownButton: {
    whileHover: {
      backgroundColor: "var(--tertiary-color)",
    },
  },
  dropdownModal: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: [-20, 0],
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.3,
    },
  },
};

export default animations;
