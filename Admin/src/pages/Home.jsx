import { FaCloudUploadAlt } from "react-icons/fa";
import SelectBox from "../components/SelectBox";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [option, setOption] = useState("");
  const category = ["Mens", "Women", "Kids"];
  const subCategory = ["Topwear", "Bottomwear", "WinterWear"];
  const sizeArr = ["S", "M", "L", "XL", "XXL"];

  const [images, setImages] = useState(Array(4).fill(null));
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [subCategoryValue, setSubCategoryValue] = useState("");
  const [label, setLabel] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [isBestSeller, setIsBestSeller] = useState(false);

  // console.log(images);
  // console.log(images[0]?.file);
  const sizeSelector = (e) => {
    sizes.includes(e.target.innerText)
      ? setSizes(sizes.filter((size) => size !== e.target.innerText))
      : setSizes((prev) => [...prev, e.target.innerText]);
  };

  // console.log(isBestSeller);

  const formHandler = async (e) => {
    e.preventDefault();

    const totalImages = images.filter((image) => image !== null);
    console.log(totalImages[0].file);

    const resetForm = () => {
      // setImages([]);
      // setProductName("");
      // setProductDescription("");
      // setCategoryValue("");
      // setSubCategoryValue("");
      // setPrice("");
      // setSizes("");
      // setIsBestSeller(false);
    };

    try {
      const formData = new FormData();
      formData.append("name", productName);
      formData.append("description", productDescription);
      formData.append("price", price);

      totalImages.forEach((file) => {
        formData.append("image", file.file);
      });

      formData.append("category", categoryValue);
      formData.append("subCategory", subCategoryValue);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", isBestSeller);

      const response = await axios.post(
        "http://localhost:8000/sendData",
        formData,
        {
          headers: {
            Authorization: "1243",
          },
        }
      );

      console.log("response", response.data);

      if (response.data.success) {
        resetForm();
      } else {
        console.log("error while uploading");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <main className="sm:mx-8 mt-8 sm:mt-20 ">
      <form
        className="space-y-8 mb-6 max-w-[840px]"
        onSubmit={(e) => formHandler(e)}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex flex-col items-center">
              <label
                htmlFor={`upload-${i}`}
                className="cursor-pointer relative overflow-hidden flex flex-col items-center justify-center gap-2 w-full aspect-[4/3] border-2 border-dashed border-blue-700 rounded-lg hover:bg-red-50  transition-all">
                {images[i] ? (
                  <img
                    className="aspect-[4/3] absolute w-full"
                    src={images[i].preview}
                    alt={images[i].preview}
                  />
                ) : (
                  <FaCloudUploadAlt className="text-3xl text-gray-400" />
                )}
                <p className="text-xs text-blue-700">Upload</p>
              </label>

              <input
                type="file"
                id={`upload-${i}`}
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log(file);
                  const updated = [...images];
                  updated[i] = {
                    file,
                    preview: URL.createObjectURL(file),
                  };
                  setImages(updated);
                }}
              />
            </div>
          ))}
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col sm:col-span-2 space-y-2">
            <label htmlFor="pName" className="font-medium">
              Product Name
            </label>
            <input
              type="text"
              id="pName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="border rounded-lg px-4 py-2 outline-none"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-full sm:col-span-2">
            <label htmlFor="pDescription" className="font-medium">
              Product Description
            </label>
            <textarea
              id="pDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              rows={4}
              className="border rounded-lg px-4 py-2 outline-none resize-none"
            />
          </div>

          <div
            className="flex flex-col w-full space-y-2"
            onClick={() => setLabel("category")}>
            <label htmlFor="category" className="font-medium">
              Category
            </label>
            <SelectBox
              setCategoryValue={setCategoryValue}
              options={category}
              setOption={setOption}
              label={label}
            />
          </div>
          <div
            className="flex w-full flex-col space-y-2"
            onClick={() => setLabel("subCategory")}>
            <label htmlFor="subCategory" className="font-medium">
              Sub Category
            </label>
            <SelectBox
              label={label}
              setSubCategoryValue={setSubCategoryValue}
              options={subCategory}
              setOption={setOption}
            />
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="price" className="font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border rounded-lg px-4 py-2 outline-none"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p className="font-medium">Available Sizes</p>
            <div className="flex flex-wrap gap-3">
              {sizeArr.map((size) => (
                <button
                  type="button"
                  onClick={(e) => sizeSelector(e)}
                  key={size}
                  className={`px-4 py-2 bg-gray-400  text-white rounded-lg hover:bg-gray-600 transition-all ${
                    sizes.includes(size) ? "bg-gray-600" : ""
                  }`}>
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="bestseller"
            checked={isBestSeller}
            className="w-4 h-4"
            onChange={() => setIsBestSeller(!isBestSeller)}
          />
          <label htmlFor="bestseller" className="text-sm font-medium">
            Mark as Bestseller
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all">
            Add Product
          </button>
        </div>
      </form>
    </main>
  );
}
