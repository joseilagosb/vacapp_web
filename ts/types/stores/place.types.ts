import { Place } from "../models.types";

export type PlaceState = {
  place: Place;
};

export type PlaceActions = {};

export type PlaceStore = PlaceState & PlaceActions;
