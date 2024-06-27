"use client";

import { PropsWithChildren, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { PlaceStore } from "@/ts/types/stores/place.types";
import { createPlaceStore } from "@/stores/place/place.store";
import { PlaceQuery } from "@/ts/types/graphql/queries/place.types";
import { initPlaceStore } from "@/stores/place/place.init";

export const PlaceStoreContext = createContext<StoreApi<PlaceStore> | null>(null);

export const PlaceStoreProvider = ({
  children,
  data,
}: PropsWithChildren & { data: PlaceQuery }) => {
  const storeRef = useRef<StoreApi<PlaceStore>>();

  if (!storeRef.current) {
    storeRef.current = createPlaceStore(initPlaceStore(data));
  }

  return (
    <PlaceStoreContext.Provider value={storeRef.current}>{children}</PlaceStoreContext.Provider>
  );
};
