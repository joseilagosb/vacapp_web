import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  aboutPlace: {
    initial: { scale: 0.98, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      delay: 0.8,
    },
  },
};

export default animations;
