import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <section className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2  h-[80vh]  max-w-full max-h-[90vh] items-center justify-center">
      <div className="text-center text-3xl row-end-3 sm:row-end-2">
        <p>—Our BestSeller</p>
        <h1 className="text-5xl  my-2 text-mullRed">Latest Arrival</h1>
        <p>Shop Now—</p>
      </div>
      <img
        className="object-cover aspect-[16/9] max-w-full mx-auto"
        src={assets.hero_img}
        alt=""
      />
    </section>
  );
}
