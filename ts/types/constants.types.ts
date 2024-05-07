import { Theme } from "../enums/constants.enums";

export type MapStylesType = {
  [key in Theme as string]: string;
};
