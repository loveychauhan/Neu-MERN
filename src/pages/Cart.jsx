import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { assets } from "../assets/assets";

export default function Cart() {
  const { cartItem, products } = useContext(ShopContext);
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    let tempData = [];
    for (const id in cartItem) {
      for (let s in cartItem[id]) {
        if (cartItem[id][s] > 0) {
          tempData.push({
            id: id,
            size: s,
            quantity: cartItem[id][s],
          });
        }
      }
    }

    const data = tempData.map((item) => {
      const product = products.find((product) => product._id === item.id);
      return {
        ...product,
        size: item.size,
        quantity: item.quantity,
      };
    });

    setProductData(data);
  }, [cartItem]);
  console.log(productData);
  return (
    <div>
      <Navbar />
      <main className="mx-4  mt-28 ">
        <Title highlitedText="Cart" normalText="items" />

        {productData.map((item) => {
          return (
            <div className="grid grid-cols-1 sm:grid-cols-[4fr_2.5fr_0.5fr] items-center border-b py-4 px-2 gap-6 sm:gap-4 hover:bg-gray-50 transition-colors duration-300">
              {/* Product Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={item.image[0]}
                  alt={`Image of ${item.name}`}
                  className=" aspect-4/3 object-contain  rounded-md shadow-sm"
                />
                <div className="space-y-1">
                  <h4 className="text-base font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-sm font-medium text-mullRed">
                    ₹{item.price}
                  </p>
                  <p className="text-xs text-gray-500">Size: {item.size}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center justify-start sm:justify-center gap-3 text-lg">
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
                  −
                </button>
                <p className="font-medium">{item.quantity}</p>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">
                  +
                </button>
              </div>

              {/* Remove Icon */}
              <div className="flex justify-start sm:justify-center">
                <button className="p-2 hover:bg-red-50 rounded-full transition-colors">
                  <img src={assets.bin_icon} alt="Remove" className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}
