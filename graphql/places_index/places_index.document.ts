import { gql } from "graphql-tag";

export const PlacesIndexDocument = gql`
  query {
    __typename
    allPlaces {
      __typename
      id
      place_name
      place_short_name
      place_working_days {
        __typename
        id
        day_of_week
        opening_time
        closing_time
      }
    }
    allPlaceTypes {
      __typename
      id
      place_type_name
    }
    allServices {
      __typename
      id
      service_name
    }
  }
`;
