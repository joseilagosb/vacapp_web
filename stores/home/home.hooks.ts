import { useContext } from "react";
import { useStore } from "zustand";

import { HomeStoreContext } from "@/providers/home_store_provider";
import { HomeStore } from "@/ts/types/stores/home.types";

export const useHomeStore = <T>(selector: (store: HomeStore) => T): T => {
  const homeStoreContext = useContext(HomeStoreContext);

  if (!homeStoreContext) {
    throw new Error("useHomeStore must be used within HomeStoreProvider");
  }

  return useStore(homeStoreContext, selector);
};
