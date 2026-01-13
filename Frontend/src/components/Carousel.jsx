import { useEffect, useState } from "react";
import clothes from "../assets/clothes/clothes";
import { GrNext, GrPrevious } from "react-icons/gr";

const Carousel = () => {
  const sliderImages = [...clothes];
  const [heroImage, setHeroImage] = useState(0);

  const handlePrev = () => {
    if (heroImage === 0) return setHeroImage(sliderImages.length - 1);
    setHeroImage((prev) => prev - 1);
  };
  const handleNext = () => {
    if (heroImage === sliderImages.length - 1) {
      return setHeroImage(0);
    }

    setHeroImage((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImage]);

  return (
    <section className="relative flex mt-15 items-center top-0 w-full mx-auto overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute left-4 z-10 hover:scale-[1.2] transition-transform ease-in-out duration-200 text-white text-2xl md:text-3xl ">
        <GrPrevious />
      </button>

      <div className="w-full flex justify-center items-center">
        {sliderImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className={`aspect-[16/9]  md:w-[100vw] md:h-[94vh] transition-opacity duration-500 ${
              heroImage === i ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        className="absolute right-4 z-10 hover:scale-[1.2] transition-transform ease-in-out duration-200  text-white text-2xl md:text-3xl ">
        <GrNext />
      </button>

      <div>
        {Array(5).map((dash) => (
          <div></div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
