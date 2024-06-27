import PlacePage from "@/components/pages/place";
import { placeQuery } from "@/graphql/place/place.index";
import { PlaceStoreProvider } from "@/providers/place_store_provider";

export default async function Page({ params }: { params: { id: string } }) {
  const { data: place, error } = await placeQuery({ id: params.id });

  if (!place) {
    throw new Error(error!.message);
  }

  return (
    <PlaceStoreProvider data={place}>
      <PlacePage />
    </PlaceStoreProvider>
  );
}
