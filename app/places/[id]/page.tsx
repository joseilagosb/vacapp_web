export default function Page({ params }: { params: { id: string } }) {
  return <div>Place {params.id}</div>;
}
