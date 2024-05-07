import { Maybe, Scalars } from "./utils.types";

export type Area = {
  __typename?: "Area";
  area_name?: Maybe<Scalars["String"]["output"]>;
  coordinates?: Maybe<Array<Maybe<Coordinate>>>;
  id: Scalars["ID"]["output"];
};

export type AuthPayload = {
  __typename?: "AuthPayload";
  token: Scalars["String"]["output"];
  user: User;
};

export type AverageCrowd = {
  __typename?: "AverageCrowd";
  people_no?: Maybe<Scalars["Int"]["output"]>;
  time_period?: Maybe<Scalars["String"]["output"]>;
};

export type Coordinate = {
  __typename?: "Coordinate";
  id: Scalars["ID"]["output"];
  latitude?: Maybe<Scalars["Decimal"]["output"]>;
  longitude?: Maybe<Scalars["Decimal"]["output"]>;
};

export type CrowdReport = {
  __typename?: "CrowdReport";
  today_crowd_report?: Maybe<TodayCrowdReport>;
  various?: Maybe<VariousCrowdReport>;
  week_crowd_report?: Maybe<Array<Maybe<WeekCrowdReport>>>;
};

export type CurrentCrowd = {
  __typename?: "CurrentCrowd";
  crowd_day_of_week?: Maybe<Scalars["Int"]["output"]>;
  crowd_hour?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  people_no?: Maybe<Scalars["Int"]["output"]>;
  place_id?: Maybe<Scalars["Int"]["output"]>;
};

export type CurrentQueue = {
  __typename?: "CurrentQueue";
  id: Scalars["ID"]["output"];
  people_no?: Maybe<Scalars["Int"]["output"]>;
  place_id?: Maybe<Scalars["Int"]["output"]>;
  queue_day_of_week?: Maybe<Scalars["Int"]["output"]>;
  queue_hour?: Maybe<Scalars["Int"]["output"]>;
};

export type HourCrowd = {
  __typename?: "HourCrowd";
  hour?: Maybe<Scalars["Int"]["output"]>;
  people_no?: Maybe<Scalars["Int"]["output"]>;
  time_period?: Maybe<Scalars["String"]["output"]>;
};

export type Indicator = {
  __typename?: "Indicator";
  id: Scalars["ID"]["output"];
  indicator_description?: Maybe<Scalars["String"]["output"]>;
  indicator_name?: Maybe<Scalars["String"]["output"]>;
  indicator_type?: Maybe<Scalars["Int"]["output"]>;
  indicator_value?: Maybe<Scalars["Float"]["output"]>;
  opinion_no?: Maybe<Scalars["Int"]["output"]>;
};

export type Place = {
  __typename?: "Place";
  attention_surface?: Maybe<Scalars["Int"]["output"]>;
  coordinates?: Maybe<Array<Maybe<Coordinate>>>;
  current_crowds?: Maybe<Array<Maybe<CurrentCrowd>>>;
  current_queues?: Maybe<Array<Maybe<CurrentQueue>>>;
  id: Scalars["ID"]["output"];
  indicators?: Maybe<Array<Maybe<Indicator>>>;
  place_address?: Maybe<Scalars["String"]["output"]>;
  place_name?: Maybe<Scalars["String"]["output"]>;
  place_short_name?: Maybe<Scalars["String"]["output"]>;
  place_type?: Maybe<PlaceType>;
  place_working_days?: Maybe<Array<Maybe<PlaceWorkingDay>>>;
  services?: Maybe<Array<Maybe<Service>>>;
  surface?: Maybe<Scalars["Int"]["output"]>;
};

export type PlaceSnapshot = {
  __typename?: "PlaceSnapshot";
  covid_safety_score?: Maybe<Scalars["Float"]["output"]>;
  crowd_people_no?: Maybe<Scalars["Int"]["output"]>;
  day_of_week?: Maybe<Scalars["Int"]["output"]>;
  hour_of_day?: Maybe<Scalars["Int"]["output"]>;
  place_id: Scalars["ID"]["output"];
  queue_people_no?: Maybe<Scalars["Int"]["output"]>;
  service_quality_score?: Maybe<Scalars["Float"]["output"]>;
};

export type PlaceType = {
  __typename?: "PlaceType";
  id: Scalars["ID"]["output"];
  place_type_name?: Maybe<Scalars["String"]["output"]>;
};

export type PlaceWorkingDay = {
  __typename?: "PlaceWorkingDay";
  closing_time?: Maybe<Scalars["String"]["output"]>;
  day_of_week?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["ID"]["output"];
  opening_time?: Maybe<Scalars["String"]["output"]>;
};

export type Service = {
  __typename?: "Service";
  id: Scalars["ID"]["output"];
  service_description?: Maybe<Scalars["String"]["output"]>;
  service_name?: Maybe<Scalars["String"]["output"]>;
};

export type TodayCrowdReport = {
  __typename?: "TodayCrowdReport";
  highest_today_crowd?: Maybe<Array<Maybe<HourCrowd>>>;
  lowest_today_crowd?: Maybe<Array<Maybe<HourCrowd>>>;
};

export type User = {
  __typename?: "User";
  password?: Maybe<Scalars["String"]["output"]>;
  username?: Maybe<Scalars["String"]["output"]>;
};

export type VariousCrowdReport = {
  __typename?: "VariousCrowdReport";
  least_crowded_day_same_time?: Maybe<Scalars["Int"]["output"]>;
  tomorrow_people_no_at_same_time?: Maybe<Scalars["Int"]["output"]>;
};

export type WeekCrowdReport = {
  __typename?: "WeekCrowdReport";
  average_people_no?: Maybe<Array<Maybe<AverageCrowd>>>;
  highest_average_crowd?: Maybe<Array<Maybe<HourCrowd>>>;
  lowest_average_crowd?: Maybe<Array<Maybe<HourCrowd>>>;
  type?: Maybe<Scalars["String"]["output"]>;
};
