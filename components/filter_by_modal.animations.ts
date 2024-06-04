import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  filterByModal: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      y: [95, 0],
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.1 },
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
