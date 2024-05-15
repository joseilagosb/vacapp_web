"use client";

import { PropsWithChildren, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { PlaceFiltersStore } from "@/ts/types/stores/place_filters.types";
import { createPlaceFiltersStore } from "@/stores/place_filters/place_filters.store";

export const PlaceFiltersStoreContext = createContext<StoreApi<PlaceFiltersStore> | null>(null);

export const PlaceFiltersStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi<PlaceFiltersStore>>();

  if (!storeRef.current) {
    storeRef.current = createPlaceFiltersStore();
  }

  return (
    <PlaceFiltersStoreContext.Provider value={storeRef.current}>
      {children}
    </PlaceFiltersStoreContext.Provider>
  );
};
