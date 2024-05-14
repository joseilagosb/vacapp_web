import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import { Theme } from "@/ts/enums/constants.enums";
import { MapStyle, ThemeIcon } from "@/ts/types/constants.types";

export const MapStyles: MapStyle = {
  [Theme.Light]: "mapbox://styles/joseilagosb/clv5vf5s602q701nrgkjp74kc",
  [Theme.Dark]: "mapbox://styles/joseilagosb/cklstirgf19x717mfjj0mltjx",
};

export const ThemeIcons: ThemeIcon = {
  [Theme.Light]: faSun,
  [Theme.Dark]: faMoon,
};
