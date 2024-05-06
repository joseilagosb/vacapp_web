export enum Theme {
  Light = "light",
  Dark = "dark",
}

type MapStylesType = {
  [key in Theme as string]: string;
};

export const MapStyles: MapStylesType = {
  [Theme.Light]: "mapbox://styles/joseilagosb/clv5vf5s602q701nrgkjp74kc",
  [Theme.Dark]: "mapbox://styles/joseilagosb/cklstirgf19x717mfjj0mltjx",
};
