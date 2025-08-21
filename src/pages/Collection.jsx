import { useState } from "react";
import { products } from "../assets/assets";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Collection() {
  const [allCollection, setAllCollection] = useState(products);

  const clickHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    console.log(selectedCategory);

    let filtered = [];

    filtered = products
      .filter((product) => product.category.toLowerCase() === selectedCategory)
    console.log(filtered);
  };
  return (
    <div>
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <section className="flex items-center flex-wrap gap-4 justify-between my-8">
          <h2 className=" text-2xl font-medium ">Filter—</h2>
          <select name="" id="" className="outline-0 p-2 border-[1px] ">
            <option className="sort" value="">
              Sort By: Relevant
            </option>
            <option className="sort" value="lowToHigh">
              Price: Low to High
            </option>
            <option className="sort" value="HighToLow">
              Price: High to Low
            </option>
          </select>
        </section>

        <section className="flex  flex-col md:flex-row gap-8">
          <section className=" flex-shrink-0">
            <form className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-4 bg-white border border-gray-200 rounded-xl p-6 px-8 shadow-sm">
              {[
                { id: "women", label: "Women" },
                { id: "men", label: "Men" },
                { id: "kids", label: "Kids" },
                { id: "topwear", label: "Topwear" },
                { id: "bottomwear", label: "Bottomwear" },
                { id: "winterwear", label: "Winterwear" },
              ].map(({ id, label }) => (
                <label
                  key={id}
                  htmlFor={id}
                  className="flex items-center gap-2 cursor-pointer transition-colors hover:text-mullRed">
                  <input
                    type="checkbox"
                    id={id}
                    value={label}
                    onChange={(e) => clickHandler(e)}
                    className="w-4 h-4 accent-mullRed cursor-pointer"
                  />
                  <span className=" font-medium text-gray-700">{label}</span>
                </label>
              ))}
            </form>
          </section>

          {/* <section className="grid items-center sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
            <Card products={allCollection } />
          </section> */}
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16 mt-24">
        <Footer />
      </footer>
    </div>
  );
}
