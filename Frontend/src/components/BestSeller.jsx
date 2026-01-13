import { useContext } from "react";
import Card from "./Card";
import { ShopContext } from "../context/contextProvider";

export default function BestSeller() {
  const { collectionProducts } = useContext(ShopContext);
  const bestSellerProducts = collectionProducts
    ?.filter((product) => product.bestseller)
    .slice(0, 5);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      <Card products={bestSellerProducts} />
    </section>
  );
}
