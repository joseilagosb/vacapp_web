import * as Types from "../types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useMapViewDataQuery(options?: Omit<Urql.UseQueryArgs<Operations.MapViewDataQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.MapViewDataQuery, Operations.MapViewDataQueryVariables>({ query: Operations.MapViewDataDocument, ...options });
};