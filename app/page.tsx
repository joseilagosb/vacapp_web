import MapView from "@/components/map_view";
import { getMapViewData } from "@/services/api";

export default async function Home() {
  const { data: mapViewData, error } = await getMapViewData();
  
  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MapView />
    </main>
  );
}
