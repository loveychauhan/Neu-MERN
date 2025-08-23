import { useEffect, useState } from "react";
import { products } from "../assets/assets";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useFetcher, useNavigate } from "react-router-dom";
import AnimatedSelect from "./AnimatedSelect";

export default function Collection() {
  const [allCollection, setAllCollection] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [priceSorting, setPriceSorting] = useState("");
  const [visible, setVisible] = useState(false);
  const [clearAll, setClearAll] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const navigation = useNavigate();

  useEffect(() => {
    console.log("clear All");
    if (clearAll) {
      setCategory([]);
      setSubCategory([]);
    }
  }, [clearAll]);

  useEffect(() => {
    let allProduct = [...products];

    if (category.length > 0) {
      allProduct = allProduct.filter((product) =>
        category.includes(product.category.toLowerCase())
      );
    }
    if (subCategory.length > 0) {
      allProduct = allProduct.filter((product) =>
        subCategory.includes(product.subCategory.toLowerCase())
      );
    }

    if (priceSorting === "lowtohigh") {
      allProduct = allProduct.sort((a, b) => a.price - b.price);
    } else if (priceSorting === "hightolow") {
      allProduct = allProduct.sort((a, b) => b.price - a.price);
    }
    setAllCollection(allProduct);
  }, [category, subCategory, priceSorting, clearAll]);

  const categoryHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    setIsChecked((prev) => !prev);

    let updatedChecked;
    if (e.target.checked) {
      updatedChecked = [...category, selectedCategory];
    } else if (!e.target.checked) {
      updatedChecked = category.filter((item) => item !== selectedCategory);
    }
    setCategory(updatedChecked);
  };

  const subCategoryHandler = (e) => {
    const selectedCategory = e.target.value.toLowerCase();
    let updatedChecked;
    if (e.target.checked) {
      updatedChecked = [...subCategory, selectedCategory];
    } else if (!e.target.checked) {
      updatedChecked = subCategory.filter((item) => item !== selectedCategory);
    }
    setSubCategory(updatedChecked);
  };

  const optionsHandler = (e) => {
    const sortOption = e.target.value.toLowerCase();
    setPriceSorting(sortOption);
  };

  const handleClearAll = () => {
    setCategory([]);
    setSubCategory([]);
    setPriceSorting("");
    setAllCollection(products); // optional, if you want instant reset
  };

  return (
    <div>
      <Navbar />

      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <section className="flex items-center flex-wrap gap-4 justify-between my-8">
          <div
            className=" text-2xl flex items-center gap-1 font-medium cursor-context-menu "
            onClick={() => setVisible((prev) => !prev)}>
            Filter{" "}
            <button>
              <RiArrowDropDownLine
                className={`text-3xl mt-1 transition-all ease-in-out duration-300 ${
                  visible ? "" : "rotate-180"
                }`}
              />
            </button>
          </div>
          {/* <select
            name="sort"
            id="sort"
            onChange={optionsHandler}
            className="px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-mullRed focus:border-mullRed transition-all duration-300">
            <option value="">Sort By: Relevant</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="HighToLow">Price: High to Low</option>
          </select> */}
          <AnimatedSelect optionsHandler={optionsHandler} />
        </section>

        <section
          className={`grid grid-cols-1 gap-8 items-start  md:grid-cols-[auto_1fr]  `}>
          <section
            className={`max-w-[768px] w-full md:w-[240px] border border-gray-200 rounded-xl shadow-sm transition-all duration-700 ease-in-out origin-top transform overflow-hidden ${
              visible
                ? "p-6 opacity-100 "
                : "p-0 opacity-0 max-h-0 pointer-events-none w-0"
            }`}>
            {visible && (
              <button
                className={`px-2 py-1 border-[1px] mb-2 md:mb-4 text-[12px] rounded-[12px]`}
                onClick={handleClearAll}>
                Clear All
              </button>
            )}

            <div className="flex flex-col gap-4 justify-center md:6">
              <div>
                <p className="mb-2 md:4 font-medium">Category</p>
                <form className="flex flex-wrap md:items-start md:flex-col items-center justify-between gap-4">
                  {[
                    { id: "women", label: "Women" },
                    { id: "men", label: "Men" },
                    { id: "kids", label: "Kids" },
                  ].map(({ id, label }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex items-center gap-2 cursor-pointer transition-colors hover:text-mullRed">
                      <input
                        type="checkbox"
                        id={id}
                        value={label}
                        checked={isChecked}
                        onChange={(e) => categoryHandler(e)}
                        className={`w-4 h-4 cursor-pointer ${
                          isChecked ? "accent-mullRed" : ""
                        }`}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </form>
              </div>

              <div>
                <p className="mb-2 md:4 font-medium">Subcategory</p>
                <form className="flex flex-wrap md:items-start md:flex-col items-center justify-between gap-4">
                  {[
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
                        onChange={(e) => subCategoryHandler(e)}
                        className="w-4 h-4 accent-mullRed cursor-pointer"
                      />
                      <span className="text-sm font-medium text-gray-700">
                        {label}
                      </span>
                    </label>
                  ))}
                </form>
              </div>
            </div>
          </section>
          <section
            className={`grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] sm:grid-cols-3 lg:grid-cols-4 gap-6 overflow-y-auto items-start transition-all duration-500 ${
              visible ? "" : "col-span-3 row-span-2"
            }`}>
            <Card
              products={allCollection.length > 0 ? allCollection : products}
            />
          </section>
        </section>
      </main>
      <footer className="mx-4 sm:mx-8 md:mx-16 mt-24">
        <Footer />
      </footer>

      <div></div>
    </div>
  );
}
