"use client";

import { PropsWithChildren, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { initMapStore } from "@/stores/map/map.init";
import { createMapStore } from "@/stores/map/map.store";
import { MapStore } from "@/ts/types/stores/map.types";

export const MapStoreContext = createContext<StoreApi<MapStore> | null>(null);

export const MapStoreProvider = ({ children }: PropsWithChildren) => {
  const storeRef = useRef<StoreApi<MapStore>>();
  if (!storeRef.current) {
    storeRef.current = createMapStore(initMapStore());
  }

  return <MapStoreContext.Provider value={storeRef.current}>{children}</MapStoreContext.Provider>;
};
