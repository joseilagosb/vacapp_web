import * as Types from './types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type LoginMutationVariables = Types.Exact<{
  username: Types.Scalars['String']['input'];
  password: Types.Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token: string, user: { __typename?: 'User', username?: string | null, password?: string | null } } | null };

export type MapViewDataQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MapViewDataQuery = { __typename?: 'Query', allPlaces?: Array<{ __typename?: 'Place', id: string, place_name?: string | null, place_short_name?: string | null, surface?: number | null, attention_surface?: number | null, place_type?: { __typename?: 'PlaceType', id: string, place_type_name?: string | null } | null, services?: Array<{ __typename?: 'Service', id: string, service_name?: string | null } | null> | null, coordinates?: Array<{ __typename?: 'Coordinate', latitude?: any | null, longitude?: any | null } | null> | null, place_working_days?: Array<{ __typename?: 'PlaceWorkingDay', id: string, day_of_week?: number | null, opening_time?: string | null, closing_time?: string | null } | null> | null } | null> | null, allAreas?: Array<{ __typename?: 'Area', id: string, area_name?: string | null, coordinates?: Array<{ __typename?: 'Coordinate', latitude?: any | null, longitude?: any | null } | null> | null } | null> | null, allPlaceTypes?: Array<{ __typename?: 'PlaceType', id: string, place_type_name?: string | null } | null> | null, allServices?: Array<{ __typename?: 'Service', id: string, service_name?: string | null } | null> | null };


export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    token
    user {
      username
      password
    }
  }
}
    `;
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
    place_working_days {
      id
      day_of_week
      opening_time
      closing_time
    }
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