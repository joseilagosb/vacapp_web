import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  navigator: {
    initial: { scale: 0.98, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      delay: 0.7,
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
};

export default animations;
