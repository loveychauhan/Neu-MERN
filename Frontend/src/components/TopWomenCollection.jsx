import { useContext } from "react";
import Card from "./Card";
import { ShopContext } from "../context/contextProvider";

export default function TopWomenCollection() {
  const { collectionProducts } = useContext(ShopContext);

  const topWomenCollection = collectionProducts
    ?.filter((prod) => prod.category === "Women")
    .slice(5, 13);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 ">
      <Card products={topWomenCollection} />
    </section>
  );
}
