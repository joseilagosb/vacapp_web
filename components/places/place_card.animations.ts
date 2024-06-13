import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  placeCard: {
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
