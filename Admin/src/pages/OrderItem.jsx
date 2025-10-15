import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../../../Frontend/src/components/Title";

const OrderPage = () => {
  const token = localStorage.getItem("token");
  const [orderStatus, setOrderStatus] = useState("Order placed");
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8000/show-order",
          { orderStatus },
          { headers: { Authorization: token } }
        );
        // console.log(response.data.data);
        if (response.data.status) {
          setOrderData(response.data.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => fetchOrders();
  }, [token, orderStatus]);

  function isoToMmDdYyyy(isoString) {
    const date = new Date(isoString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }

  const selectHandler = (e) => {
    // console.log(orderData);
    let orderItems = [];
    for (let item in orderData) {
      console.log(orderData[item]);
    }
    setOrderStatus(e.target.value);
  };
  //
  return (
    <section>
      <main className="mx-auto mt-10 max-w-[1024px] min-h-[80vh] px-4 flex flex-col gap-6">
        <Title highlitedText="Placed" normalText="Orders" />
        <section>
          {orderData.map((order) => {
            return order.cartData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between flex-wrap items-center gap-4 my-4  border-b pb-4 px-4  ">
                  <div className="flex items-start gap-4 ">
                    <img
                      className="aspect-[4/3] overflow-hidden max-w-[120px] object-contain"
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
                  </div>

                  <div className="flex items-center justify-between bg-red-400 p-1.5 gap-2 rounded-[4px]">
                    <p className=" text-sm text-white ">{orderStatus}</p>
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                  </div>
                  <div>
                    <select
                      onChange={selectHandler}
                      className="flex items-center outline-0 text-sm justify-between border p-1.5 gap-2 rounded-[4px]"
                      name=""
                      id="orderStatus">
                      <option value={orderStatus}>Track Order</option>
                      <option>Order placed</option>
                      <option>Ready to ship</option>
                      <option>Shipped</option>
                    </select>
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
