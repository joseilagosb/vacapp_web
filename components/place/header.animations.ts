import { AnimationsObject } from "@/ts/types/constants.types";

const animations: AnimationsObject = {
  header: {
    animate: {
      y: [-50, 0],
    },
    transition: {
      duration: 0.4,
    },
  },
  headerCardContainer: {
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.4,
        },
      },
    },
    initial: "hidden",
    animate: "visible",
  },
  headerCard: {
    variants: {
      hidden: {
        scale: 0.8,
        opacity: 0,
      },
      visible: {
        scale: 1,
        opacity: 1,
      },
    },
  },
  mapsButton: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { delay: 0.4 },
  },
};

export default animations;
