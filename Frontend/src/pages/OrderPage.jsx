import axios from "axios";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderPage = () => {
  const token = localStorage.getItem("token");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/orders",
          {},
          { headers: { Authorization: token } }
        );
        if (response.data.success) {
          setOrderData(response.data.cartData);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => fetchOrders();
  }, [token]);

  function isoToMmDdYyyy(isoString) {
    const date = new Date(isoString);
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  //
  return (
    <section>
      <Navbar />
      <main
        className={`mx-auto mt-24 max-w-[1024px] min-h-[80vh] px-4 flex flex-col gap-6 `}>
        <Title highlitedText="My" normalText="Orders" />
        <section>
          {orderData.map((order) => {
            return order.cartData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between flex-wrap items-center gap-4 my-4  border-b pb-4 px-4  ">
                  <Link
                    to={`/product/${item._id}`}
                    className="flex items-start gap-4 ">
                    <img
                      className=" aspect-[4/3] overflow-hidden max-w-[120px] object-contain"
                      src={item.image[0]}
                      alt={item.name}
                    />
                    <div className="flex flex-col text-sm md:min-w-[250px]">
                      <p title={item.name} className="line-clamp-1  ">
                        {item.name}
                      </p>
                      <div className="space-x-2 flex flex-wrap">
                        <p>
                          {" "}
                          <span className="font-semibold">$</span>
                          {item.price}
                        </p>
                        <p>
                          {" "}
                          <span className="font-semibold">Quantity</span>{" "}
                          {item.quantity}
                        </p>
                      </div>
                      <p>
                        {" "}
                        <span className="font-semibold">Date:</span>{" "}
                        {isoToMmDdYyyy(order.date)}
                      </p>
                      <p>
                        <span className="font-semibold">Payment Mode:</span>{" "}
                        {order.paymentMethod}
                      </p>
                    </div>
                  </Link>

                  <div className="flex items-center justify-between bg-red-400 p-1.5 gap-2 rounded-[4px]">
                    <p className=" text-sm text-white "> Order placed</p>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div className="flex items-center justify-between border p-1.5 gap-2 rounded-[4px]">
                    <p className=" text-sm">Track Order</p>
                  </div>
                </div>
              );
            });
          })}
        </section>
      </main>
    </section>
  );
};

export default OrderPage;
