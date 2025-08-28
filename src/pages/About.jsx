import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <div className="relative w-full h-[70vh]">
          <img
            src={assets.aboutHero}
            alt="e-commerceApp"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col  gap-2 items-center justify-center">
            <h1 className="text-white text-4xl font-bold">CodeWare Store...</h1>
            <p className="text-white text-4xl font-bold">
              Your Daily Go To Store
            </p>
          </div>
        </div>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16 mt-28">
        <Footer />
      </footer>
    </div>
  );
}
