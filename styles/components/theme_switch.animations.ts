import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  switch: {
    layout: true,
    transition: {
      type: "spring",
      stiffness: 700,
      damping: 30,
    },
  },
};

export default animations;
