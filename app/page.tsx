import { registerUrql } from "@urql/next/rsc";
import { getUrqlClient } from "@/services/urql";

import { mapViewDataQuery } from "@/graphql/map_view_data/map_view_data";

import HomePage from "@/components/pages/home";

import { HomeStoreProvider } from "@/providers/home_store_provider";

export const { getClient } = registerUrql(getUrqlClient);

export default async function Home() {
  const { data: mapViewData, error } = await mapViewDataQuery(getClient);

  if (!mapViewData) {
    throw new Error(error!.message);
  }

  return (
    <main className="h-[calc(100vh-64px)] flex flex-col absolute top-16 bottom-0 left-0 right-0 items-center justify-start">
      <HomeStoreProvider data={mapViewData}>
        <HomePage />
      </HomeStoreProvider>
    </main>
  );
}
