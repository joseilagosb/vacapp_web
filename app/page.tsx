import MapView from "@/components/map_view";
import { MapViewDataDocument, MapViewDataQuery, MapViewDataQueryVariables } from "@/graphql/operations";
import { getUrqlClient } from "@/services/urql";
import { registerUrql } from "@urql/next/rsc";

const { getClient } = registerUrql(getUrqlClient);

export default async function Home() {
  const { data: mapViewData, error } = await getClient().query<MapViewDataQuery, MapViewDataQueryVariables>
    (MapViewDataDocument, {});
  
  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start absolute top-0 bottom-0 left-0 right-0">
      <MapView />
    </main>
  );
}
