import { MotionProps } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Theme } from "../enums/constants.enums";

export type MapStyle = { [key in Theme as string]: string };

export type ThemeIcon = { [key in Theme as string]: IconDefinition };

export type AnimationsObject = { [key: string]: MotionProps };
