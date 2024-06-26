import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

import { Theme } from "@/ts/enums/constants.enums";
import { MapStyle, SortPlacesByLabel, ThemeIcon } from "@/ts/types/constants.types";
import { LatLng } from "@/ts/types/models.types";
import { SortPlacesBy } from "@/ts/enums/components/places_index.enums";

export const MapStyles: MapStyle = {
  [Theme.Light]: "mapbox://styles/joseilagosb/clv5vf5s602q701nrgkjp74kc",
  [Theme.Dark]: "mapbox://styles/joseilagosb/cklstirgf19x717mfjj0mltjx",
};

export const ThemeIcons: ThemeIcon = {
  [Theme.Light]: faSun,
  [Theme.Dark]: faMoon,
};

export const DefaultCameraPosition: LatLng = {
  latitude: -40.587824,
  longitude: -73.103046,
};

export const SortPlacesByLabels: SortPlacesByLabel = {
  [SortPlacesBy.Default]: "Por defecto",
  [SortPlacesBy.MostVisited]: "Más visitados",
  [SortPlacesBy.Nearby]: "Más cerca de mí",
  [SortPlacesBy.Safest]: "Más seguros",
};
