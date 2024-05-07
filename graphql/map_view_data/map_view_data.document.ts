import { gql } from "graphql-tag";

export const MapViewDataDocument = gql`
  query MapViewData {
    allPlaces {
      id
      place_name
      place_short_name
      place_type {
        id
        place_type_name
      }
      services {
        id
        service_name
      }
      coordinates {
        latitude
        longitude
      }
      surface
      attention_surface
    }
    allAreas {
      id
      area_name
      coordinates {
        latitude
        longitude
      }
    }
    allPlaceTypes {
      id
      place_type_name
    }
    allServices {
      id
      service_name
    }
  }
`;
