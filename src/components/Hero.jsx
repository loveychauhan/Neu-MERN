import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <section className="grid grid-cols-2  max-w-full max-h-[90vh] items-center justify-center">
      <div className="text-center text-4xl">
        <p>—Our BestSeller</p>
        <h1 className="text-6xl my-2 text-mullRed">Latest Arrival</h1>
        <p>Shop Now—</p>
      </div>
      <div className="object-cover">
        <img src={assets.hero_img} alt="" />
      </div>
    </section>
  );
}
