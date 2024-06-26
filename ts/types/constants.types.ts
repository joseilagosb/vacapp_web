import { MotionProps } from "framer-motion";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import { Theme } from "../enums/constants.enums";
import { SortPlacesBy } from "../enums/components/places_index.enums";

export type MapStyle = { [key in Theme as string]: string };

export type ThemeIcon = { [key in Theme as string]: IconDefinition };

export type SortPlacesByLabel =  {[key in SortPlacesBy as string]: string};

export type AnimationsObject = Record<string, MotionProps>;
