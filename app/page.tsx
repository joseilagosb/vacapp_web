import HomePage from "@/components/pages/home";

export default async function Home() {
  return (
    <main className="h-[calc(100vh - 64px)] flex flex-col absolute top-16 bottom-0 left-0 right-0 items-center justify-start">
      <HomePage />
    </main>
  );
}
