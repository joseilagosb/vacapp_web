import MapView from "@/components/map_view";
import ModalContainer from "@/components/modal_container";
import Places from "@/components/places";

export default async function Home() {
  return (
    <main
      className="flex flex-col items-center justify-start absolute bottom-0 left-0 right-0"
      style={{ top: "64px", height: "calc(100vh - 64px)" }}
    >
      <Places />
      <ModalContainer />
      {/* <MapView /> */}
    </main>
  );
}
