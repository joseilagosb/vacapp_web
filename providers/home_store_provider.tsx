"use client";

import { PropsWithChildren, createContext, useRef } from "react";
import { StoreApi } from "zustand";

import { initHomeStore } from "@/stores/home/home.init";
import { createHomeStore } from "@/stores/home/home.store";
import { HomeStore } from "@/ts/types/stores/home.types";

import { MapViewDataQuery } from "@/ts/types/graphql/queries/map_view_data.types";

export const HomeStoreContext = createContext<StoreApi<HomeStore> | null>(null);

export const HomeStoreProvider = ({
  children,
  data,
}: PropsWithChildren & { data: MapViewDataQuery }) => {
  const storeRef = useRef<StoreApi<HomeStore>>();
  if (!storeRef.current) {
    storeRef.current = createHomeStore(initHomeStore(data));
  }

  return <HomeStoreContext.Provider value={storeRef.current}>{children}</HomeStoreContext.Provider>;
};
