import { MotionProps } from "framer-motion";
import { Theme } from "../enums/constants.enums";

export type MapStylesType = {
  [key in Theme as string]: string;
};

export type AnimationsObject = {
  [key: string]: MotionProps;
};
