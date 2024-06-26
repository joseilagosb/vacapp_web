import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  placesListContainer: {
    variants: {
      default: {
        y: "-60px",
      },
      filterApplied: {
        y: 0,
      },
    },
  },
};

export default animations;
