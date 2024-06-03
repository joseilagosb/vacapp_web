import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  modalBackdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 0.3 },
    exit: { opacity: 0 },
  },
  modal: {
    initial: { rotate: 270, scale: 0, opacity: 0 },
    animate: { rotate: 360, scale: 1, opacity: 1 },
    exit: { rotate: 180, scale: 0, opacity: 0 },
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default animations;
