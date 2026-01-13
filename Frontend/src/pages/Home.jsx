import { useContext } from "react";
import { assets } from "../assets/assets";
import BestSeller from "../components/BestSeller";
import EmailNewsLetter from "../components/EmailNewsLetter";
import Footer from "../components/Footer";
import OurPolicy from "../components/OurPolicy";
import Title from "../components/Title";
import { ShopContext } from "../context/contextProvider";
import TopWomenCollection from "../components/TopWomenCollection";
import BrandBar from "../components/BrandBar";
import Carousel from "../components/Carousel";

export default function Home() {
  const { searchbtnClick } = useContext(ShopContext);
  const offset = searchbtnClick ? "mt-10" : "mt-20";
  return (
    <>
      <section className={` transition-all duration-200 ease-in-out`}>
        <Carousel />
      </section>
      <main
        className={`mx-4 sm:mx-8 md:mx-16 transition-all duration-200 ease-in-out`}>
        <section className="md:mb-16">{/* <Hero /> */}</section>
        <BrandBar />
        <section className="grid gap-24">
          <Title
            highlitedText="Top Women"
            normalText="Collections"
            details="Shop the latest trend now with the best discount on your favorite drip."
          />
          <TopWomenCollection />

          <Title
            highlitedText="Best "
            normalText="Seller"
            details="Today's Best Seller Items, trendy & pocket friendly."
          />
          <BestSeller />
        </section>
        <section className="grid gap-8 my-24">
          <Title highlitedText="Our " normalText="Policy" />
          <section className="grid grid-cols-1 items-center justify-center gap-16 md:grid-cols-3">
            <OurPolicy
              image={assets.exchange_icon}
              heading="Easy exchange policy"
              description="We offer hassel free exchange policy"
            />
            <OurPolicy
              image={assets.quality_icon}
              heading="7 days return policy"
              description="We provide 7 days free return policy"
            />
            <OurPolicy
              image={assets.support_img}
              heading="Best customer support "
              description="We provide 24&#10005;7 customer support"
            />
          </section>
        </section>
        <section className="my-24 text-center">
          <EmailNewsLetter />
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16">
        <Footer />
      </footer>
    </>
  );
}
