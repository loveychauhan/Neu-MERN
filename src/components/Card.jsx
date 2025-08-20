import { products } from "../assets/assets";

export default function Card() {
  const LatestCollections = products.slice(0, 10);
  return LatestCollections.map((product) => {
    return (
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
    );
  });
}
