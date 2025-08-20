import { products } from "../assets/assets";

export default function BestSeller() {
  const bestSellerProducts = products.filter((product) => product.bestseller);

  return (
    <section className="grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 ">
      {bestSellerProducts.slice(0,5).map((product) => (
        <article
          className="grid gap-4 shadow-md backdrop-md overflow-hidden rounded-xl"
          key={product._id}>
          <div className="hover:scale-110 object-cover  transition-transform duration-300 hover:shadow:lg ease-in-out">
            <img
              className="w-full rounded-xl"
              src={product.image[0]}
              alt={product.image}
            />
          </div>
          <div className="p-4">
            <p>{product.name}</p>
            <p className="font-semibold">₹ {product.price}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
