import Navbar from "../components/Navbar";
import { assets } from "../assets/assets";

export default function About() {
  return (
    <div>
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <div className=" ">
          <img
            className="aspect-16/7"
            src={assets.aboutHero}   
            alt="e-commerceApp"
          />
        </div>
        <h1></h1>
      </main>
    </div>
  );
}
