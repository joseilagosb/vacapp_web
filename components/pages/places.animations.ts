import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  placeIndex: {
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
        },
      },
    },
    initial: "hidden",
    animate: "visible",
  },
  place: {
    variants: {
      hidden: {
        y: "20px",
        opacity: 0,
      },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 40,
          mass: 0.2,
        },
      },
    },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  },
};

export default animations;
