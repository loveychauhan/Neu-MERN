import { products } from "../assets/assets";
import Card from "./Card";

export default function LatestCollections() {
  const LatestCollections = products.slice(20, 30);
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      <Card products={LatestCollections} />
    </section>
  );
}
