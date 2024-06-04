import { gql } from "graphql-tag";

export const MapViewDataDocument = gql`
  query {
    __typename
    allPlaces {
      __typename
      id
      place_name
      place_short_name
      place_type {
        __typename
        id
        place_type_name
      }
      services {
        __typename
        id
        service_name
      }
      coordinates {
        __typename
        id
        latitude
        longitude
      }
      surface
      attention_surface
    }
    allAreas {
      __typename
      id
      area_name
      coordinates {
        __typename
        id
        latitude
        longitude
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
