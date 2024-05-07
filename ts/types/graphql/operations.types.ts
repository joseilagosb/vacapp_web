import {
  Area,
  AuthPayload,
  CrowdReport,
  Indicator,
  Place,
  PlaceSnapshot,
  PlaceType,
  Service,
  User,
} from "./schemas.types";
import { Maybe } from "./utils.types";

export type Mutation = {
  __typename?: "Mutation";
  login?: Maybe<AuthPayload>;
  signUp?: Maybe<AuthPayload>;
};

export type Query = {
  __typename?: "Query";
  allAreas?: Maybe<Array<Maybe<Area>>>;
  allIndicators?: Maybe<Array<Maybe<Indicator>>>;
  allPlaceSnapshots?: Maybe<Array<Maybe<PlaceSnapshot>>>;
  allPlaceTypes?: Maybe<Array<Maybe<PlaceType>>>;
  allPlaces?: Maybe<Array<Maybe<Place>>>;
  allServices?: Maybe<Array<Maybe<Service>>>;
  allUsers?: Maybe<Array<Maybe<User>>>;
  crowdReport?: Maybe<CrowdReport>;
  placeById?: Maybe<Place>;
  placeSnapshot?: Maybe<PlaceSnapshot>;
  userById?: Maybe<User>;
};
