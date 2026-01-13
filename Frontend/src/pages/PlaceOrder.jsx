import { useContext, useState } from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import Navbar from "../components/Navbar";
import { ShopContext } from "../context/contextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const [shipping, setShipping] = useState(10);
  const [ischecked, setIsChecked] = useState("cod");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const { totalCost, cartItem, setCartItem, collectionProducts } =
    useContext(ShopContext);
    
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    zipCode: "",
    street: "",
    state: "",
    country: "",
    phoneNumber: "",
  });
  const DELIVERY_FEE = 10;
  const token = localStorage.getItem("token");
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const orderItem = [];
      for (let id in cartItem) {
        for (let size in cartItem[id]) {
          if (cartItem[id][size] > 0) {
            const prodInfo = structuredClone(
              collectionProducts.find((i) => i._id === id)
            );
            if (prodInfo) {
              prodInfo.size = size;
              prodInfo.orderStatus = "";
              prodInfo.quantity = cartItem[id][size];
              orderItem.push(prodInfo);
            }
          }
        }
      }
      let orderData = {
        userDetails: formData,
        amount: totalCost + DELIVERY_FEE,
        cartData: orderItem,
      };

      switch (paymentMethod) {
        case "cod":
          {
            const response = await axios.post(
              "http://localhost:8000/placeorder",
              orderData,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            if (response.data.success) {
              setCartItem({});
              navigate("/cart");
            }
          }
          break;

        case "razorpay":
          {
            const response = await axios.post(
              "http://localhost:8000/razorpay",
              orderData,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
          }

          break;
        case "stripe":
          {
            const response = await axios.post(
              "http://localhost:8000/razorpay",
              orderData,
              {
                headers: {
                  Authorization: token,
                },
              }
            );
            console.log(response.data);
          }
          break;
      }
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <main className="mx-4 sm:mx-8 md:mx-16 mt-28 ">
        <div className="flex items-start mb-4">
          <Title highlitedText="Delivery " normalText="Information" />
        </div>
        <form
          onSubmit={submitHandler}
          className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          <section className="grid gap-4 grid-cols-2">
            <input
              className="input"
              type="text"
              placeholder="First Name"
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
            <input
              className="input"
              type="text"
              placeholder="Last Name"
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />

            <input
              className="input col-span-2"
              type="email"
              placeholder="Email"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              className="input"
              type="text"
              placeholder="City"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
            <input
              className="input"
              type="text"
              placeholder="State"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
            <input
              className="input col-span-2"
              type="text"
              placeholder="Street"
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
            />
            <input
              className="input"
              type="text"
              placeholder="Zip/PinCode"
              onChange={(e) =>
                setFormData({ ...formData, zipCode: e.target.value })
              }
            />
            <input
              className="input"
              type="text"
              placeholder="Country"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
            />

            <input
              className="input col-span-2"
              type="text"
              maxLength={10}
              placeholder="Phone Number"
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </section>

          <section>
            <div className="mb-4">
              <div className="mb-2">
                <h3 className="text-3xl">
                  <span className="text-mullRed">Cart </span> <span>Total</span>
                </h3>
              </div>
              <div className="border-b-[1px] flex justify-between items-center py-2">
                <p>Sub Total</p>
                <p>${totalCost}</p>
              </div>
              <div className="border-b-[1px] flex justify-between items-center py-2">
                <p>Shipping</p>
                <p>${shipping}</p>
              </div>
              <div className="flex items-center justify-between py-2">
                <p>Total</p>
                <p className="font-semibold">${totalCost + shipping}</p>
              </div>
            </div>
            <div className="mb-4">
              <h3 className="text-3xl  ">
                <span className="text-mullRed">Payment </span>{" "}
                <span>Method</span>
              </h3>
            </div>
            <div className="flex flex-wrap gap-4 justify-start items-stretch">
              <div
                onClick={() => {
                  setIsChecked("razorpay");
                  setPaymentMethod("razorpay");
                }}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5 cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "razorpay" ? "bg-green-400" : ""
                  }`}></div>
                <img
                  className="w-20  lg:w-24 object-contain"
                  src={assets.razorpay_logo}
                  alt="Razorpay"
                />
              </div>

              <div
                onClick={() => {
                  setIsChecked("stripe");
                  setPaymentMethod("stripe");
                }}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5  cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "stripe" ? "bg-green-400" : ""
                  }`}></div>
                <img
                  className="w-16 lg:w-24 object-contain"
                  src={assets.stripe_logo}
                  alt="Stripe"
                />
              </div>

              <div
                onClick={() => {
                  setIsChecked("cod");
                  setPaymentMethod("cod");
                }}
                className="flex items-center justify-between gap-4 border rounded-lg px-3 lg:px-5 lg:py-3 py-1.5  cursor-pointer transition-all duration-300 hover:shadow-sm">
                <div
                  className={`w-4 h-4 rounded-full border border-gray-600 ${
                    ischecked === "cod" ? "bg-green-400" : ""
                  }`}></div>
                <p className="text-gray-700 font-medium">Cash On Delivery</p>
              </div>
            </div>

            <div className="my-4 flex">
              <button className="px-8 w-full  rounded-[8px] py-2 border border-blue-500 bg-blue-500 text-white text-lg">
                Proceed
              </button>
            </div>
          </section>
        </form>
      </main>
    </>
  );
}

export default PlaceOrder;
