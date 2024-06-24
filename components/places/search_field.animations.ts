import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  searchField: {
    initial: {
      outlineWidth: "0px",
    },
    whileFocus: {
      outlineWidth: "3px",
      transition: {
        duration: 0.05,
      },
    },
  },
};

export default animations;
