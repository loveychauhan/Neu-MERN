import { useState } from "react";
import { products } from "../assets/assets";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Collection() {
  const [allCollection, setAllCollection] = useState("");

  const clickHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    const subCategory = e.target.value.toLowerCase();

    const categoryFiltered = products.filter(
      (product) => product.category.toLowerCase() === selectedCategory
    );

    const subCategoryFiltered = products.filter(
      (product) => product.subCategory.toLowerCase() === subCategory
    );

    setAllCollection((prev) => [...prev, ...categoryFiltered]);

    console.log(allCollection);
  };
  return (
    <div>
      <Navbar />
      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 flex justify-center gap-8">
        <h2 className="w-full">Filter—</h2>
        <section className="">
          <form action="" className="border-[1px] w-48 p-8">
            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="women"
                value="Women"
              />
              <label htmlFor="women">Women</label>
            </div>
            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="men"
                value="Men"
              />
              <label htmlFor="men">Men</label>
            </div>

            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="kids"
                value="Kids"
              />
              <label htmlFor="kids">Kids</label>
            </div>
            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="topwear"
                value="Topwear"
              />
              <label htmlFor="topwear">Topwear</label>
            </div>
            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="bottomwear"
                value="Bottomwear"
              />
              <label htmlFor="bottomwear">Bottomwear</label>
            </div>
            <div className="flex items-center  gap-2">
              <input
                // checked={isChecked}
                onChange={(e) => clickHandler(e)}
                className="w-4"
                type="checkbox"
                id="winterwear"
                value="Winterwear"
              />
              <label htmlFor="winterwear">Winterwear</label>
            </div>
          </form>
        </section>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          <Card products={allCollection || products} />
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16 mt-24">
        <Footer />
      </footer>
    </div>
  );
}
