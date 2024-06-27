import { gql } from "graphql-tag";

export const PlaceDocument = gql`
  query ($id: ID!) {
    __typename
    placeById(id: $id) {
      __typename
      id
      place_name
      place_short_name
      place_address
      surface
      attention_surface
      place_type {
        __typename
        id
        place_type_name
      }
      services {
        __typename
        id
        service_name
        service_description
      }
      coordinates {
        __typename
        id
        latitude
        longitude
      }
      place_working_days {
        __typename
        id
        day_of_week
        opening_time
        closing_time
      }
      current_crowds {
        __typename
        id
        people_no
        crowd_day_of_week
        crowd_hour
      }
      current_queues {
        __typename
        id
        people_no
        queue_day_of_week
        queue_hour
      }
      indicators {
        __typename
        indicator_name
        indicator_type
        indicator_description
        indicator_value
        opinion_no
      }
    }
  }
`;
