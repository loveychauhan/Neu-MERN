import Marquee from "react-fast-marquee";
import brands from "../assets/Brands/brand";

const BrandBar = () => {
  const brandImages = [...brands];
  return (
    <section className="bg-[#f2f2f2]/10 py-4 my-4 ">
      <Marquee className="flex items-center gap-12" speed={50} pauseOnHover>
        {brandImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Brand Partner ${i + 1}`}
            className="w-[100px] md:w-[140px] h-auto object-cover mx-2 md:mx-4 "
          />
        ))}
      </Marquee>
    </section>
  );
};

export default BrandBar;
