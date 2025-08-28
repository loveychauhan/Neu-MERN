import { products } from "../assets/assets";
import Card from "./Card";

export default function BestSeller() {
  const bestSellerProducts = products
    .filter((product) => product.bestseller)
    .slice(0, 5);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      <Card products={bestSellerProducts} />
    </section>
  );
}
