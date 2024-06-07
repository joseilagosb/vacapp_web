import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  filtersItem: {
    variants: {
      default: { backgroundColor: "var(--secondary-color)" },
      selected: { backgroundColor: "var(--tertiary-color)" },
    },
    transition: { duration: 0.1 },
  },
  actionButton: {
    whileTap: { scale: 0.95 },
    whileHover: { backgroundColor: "var(--tertiary-color)" },
  },
};

export default animations;
