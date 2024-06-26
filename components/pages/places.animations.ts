import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  placesListContainer: {
    variants: {
      default: {
        y: "-72px",
      },
      filterApplied: {
        y: 0,
      },
    },
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default animations;
