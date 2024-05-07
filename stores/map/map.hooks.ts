import { useContext } from "react";
import { useStore } from "zustand";

import { MapStoreContext } from "@/providers/map_store_provider";
import { MapStore } from "@/ts/types/stores/map.types";

export const useMapStore = <T>(selector: (store: MapStore) => T): T => {
  const mapStoreContext = useContext(MapStoreContext);

  if (!mapStoreContext) {
    throw new Error("useMapStore must be used within MapStoreProvider");
  }

  return useStore(mapStoreContext, selector);
};
