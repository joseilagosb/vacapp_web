export type PlaceType = {
  id: string;
  place_type_name: string;
};

export type Service = {
  id: string;
  service_name: string;
  service_description: string;
};

export type Coordinate = {
  id: string;
  latitude: any;
  longitude: any;
};

export type Indicator = {
  id: string;
  indicator_description: string;
  indicator_name: string;
  indicator_type: number;
  indicator_value: number;
  opinion_no: number;
};

export type Place = {
  id: string;
  place_name: string;
  place_short_name: string;
  place_address: string;
  surface: number;
  attention_surface: number;
  coordinates: Array<Coordinate>;
  place_type: PlaceType;
  services: Array<Service>;
  indicators: Array<Indicator>;
};

export type Area = {
  id: string;
  area_name: string;
  coordinates: Array<Coordinate>;
};
