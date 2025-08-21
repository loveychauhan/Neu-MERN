import { Link } from "react-router-dom";

export default function Card({ products }) {
  return products?.map((product) => {
    return (
      <article
        key={product._id}
        className="grid gap-4 shadow-md  overflow-hidden rounded-xl bg-white">
        <Link to={`/product/${product._id}`}>
          <div className="overflow-hidden m-4 ">
            <img
              src={product.image[0]}
              alt={`Image of ${product.name}`}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
          <div className="p-4">
            <p className="text-lg font-medium">{product.name}</p>
            <p className="font-semibold text-mullRed">₹ {product.price}</p>
          </div>
        </Link>
      </article>
    );
  });
}
