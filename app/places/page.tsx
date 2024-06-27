import { registerUrql } from "@urql/next/rsc";
import { getUrqlClient } from "@/services/urql";

import PlacesPage from "@/components/pages/places";

import { placesIndexQuery } from "@/graphql/places_index/places_index";
import { PlacesIndexStoreProvider } from "@/providers/places_index_store_provider";

export const { getClient } = registerUrql(getUrqlClient);

export default async function Page() {
  const { data: placesIndex, error } = await placesIndexQuery();

  if (!placesIndex) {
    throw new Error(error!.message);
  }

  const { allPlaces, allPlaceTypes, allServices } = placesIndex;

  if (!allPlaces || !allPlaceTypes || !allServices) {
    throw new Error(error!.message);
  }

  return (
    <main className="h-[calc(100vh-64px)] flex flex-col absolute top-16 bottom-0 left-0 right-0 items-center justify-start">
      <PlacesIndexStoreProvider data={placesIndex}>
        <PlacesPage />
      </PlacesIndexStoreProvider>
    </main>
  );
}
