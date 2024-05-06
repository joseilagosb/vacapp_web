import { mapViewDataQuery } from "@/graphql/map_view_data/map_view_data";
import { getUrqlClient } from "@/services/urql";
import { registerUrql } from "@urql/next/rsc";

const { getClient } = registerUrql(getUrqlClient);

export default async function Home() {
  const { data: mapViewData, error } = await mapViewDataQuery(getClient);

  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start absolute top-0 bottom-0 left-0 right-0">
      {mapViewData!["allPlaces"]?.map((place) => (
        <div>
          #{place?.id}. {place?.place_name}
        </div>
      ))}
      {/* <MapView /> */}
    </main>
  );
}
