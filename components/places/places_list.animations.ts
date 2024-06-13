import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  placesList: {
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
};

export default animations;
