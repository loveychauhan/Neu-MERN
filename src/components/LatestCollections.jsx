import Card from "./Card";

export default function LatestCollections() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 ">
      <Card />
    </div>
  );
}
