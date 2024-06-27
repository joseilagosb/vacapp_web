"use client";

import { PropsWithChildren, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { PlacesIndexStore } from "@/ts/types/stores/places_index.types";
import { createPlacesIndexStore } from "@/stores/places_index/places_index.store";
import { PlacesIndexQuery } from "@/ts/types/graphql/queries/places_index.types";
import { initPlacesIndexStore } from "@/stores/places_index/places_index.init";

export const PlacesIndexStoreContext = createContext<StoreApi<PlacesIndexStore> | null>(null);

export const PlacesIndexStoreProvider = ({
  children,
  data,
}: PropsWithChildren & { data: PlacesIndexQuery }) => {
  const storeRef = useRef<StoreApi<PlacesIndexStore>>();

  if (!storeRef.current) {
    storeRef.current = createPlacesIndexStore(initPlacesIndexStore(data));
  }

  return (
    <PlacesIndexStoreContext.Provider value={storeRef.current}>
      {children}
    </PlacesIndexStoreContext.Provider>
  );
};
