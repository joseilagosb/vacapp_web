import HomePage from "@/components/pages/home";

export default async function Home() {
  return (
    <main
      className="flex flex-col items-center justify-start absolute bottom-0 left-0 right-0"
      style={{ top: "64px", height: "calc(100vh - 64px)" }}
    >
      <HomePage />
    </main>
  );
}
