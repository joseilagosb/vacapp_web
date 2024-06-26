import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  legendModal: {
    initial: {
      opacity: 0,
      y: 80,
    },
    animate: {
      opacity: 1,
      y: [60, 0],
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
  section: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: {
      duration: 0.1,
    },
  },
  onlyShowingOpenPlaces: {
    initial: { height: 0 },
    animate: { height: "auto" },
    exit: { height: 0 },
    transition: { type: "spring", duration: 0.6 },
  },
};

export default animations;
