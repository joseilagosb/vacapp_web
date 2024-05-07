import Filters from "@/components/filters";
import MapView from "@/components/map_view";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start absolute top-0 bottom-0 left-0 right-0">
      <Filters />
      {/* <MapView /> */}
    </main>
  );
}
