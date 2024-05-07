"use client";

import { ReactNode, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { initMapStore } from "@/stores/map/map.init";
import { createMapStore } from "@/stores/map/map.store";
import { MapStore } from "@/ts/types/stores/map.types";

export const MapStoreContext = createContext<StoreApi<MapStore> | null>(null);

export type MapStoreProviderProps = {
  children: ReactNode;
};

export const MapStoreProvider = ({ children }: MapStoreProviderProps) => {
  const storeRef = useRef<StoreApi<MapStore>>();
  if (!storeRef.current) {
    storeRef.current = createMapStore(initMapStore());
  }

  return <MapStoreContext.Provider value={storeRef.current}>{children}</MapStoreContext.Provider>;
};
