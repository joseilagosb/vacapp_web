import MapView from "@/components/map_view";
import { getMapViewData } from "@/services/api";

export default async function Home() {
  const { data: mapViewData, error } = await getMapViewData();
  
  if (error) {
    throw new Error(error.message);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start absolute top-0 bottom-0 left-0 right-0">
      <MapView />
    </main>
  );
}
