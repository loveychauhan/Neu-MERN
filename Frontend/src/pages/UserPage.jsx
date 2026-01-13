import { useContext } from "react";
import { ShopContext } from "../context/contextProvider";
import { Link, useNavigate } from "react-router-dom";

const UserPage = () => {
  const { user, setIsAuthenticated } = useContext(ShopContext);
  const dummyUser = { name: "example", email: "example@gmail.com" };
  const { name, email } = user.user || dummyUser;
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsAuthenticated((prev) => !prev);
    navigate("/login");
  };
  return (
    <>
      <div className="min-h-[calc(100vh-150px)] my-20 mx-2 flex items-center justify-center">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 space-y-6 transition-all duration-500 hover:shadow-3xl border border-white/20">
          <div className="border-blue-300 border bg-blue-200 rounded-full w-24 h-24 mx-auto text-3xl mb-6 font-bold flex items-center justify-center shadow-lg">
            {email[0].toUpperCase()}
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-semibold">
                👤
              </div>
              <div>
                <h1 className="md:text-xl font-bold text-gray-800">Name</h1>
                <p className="text-gray-600 font-medium">{name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold">
                ✉️
              </div>
              <div>
                <h1 className="md:text-xl font-bold text-gray-800">Email</h1>
                <p className="text-gray-600 font-medium break-all">{email}</p>
              </div>
            </div>
            <Link
              to="/orders"
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-semibold">
                🧾
              </div>
              <div>
                <h1 className="md:text-xl font-bold text-gray-800">My Orders</h1>
                <p className="text-gray-600 font-medium break-all">
                  Check past orders.
                </p>
              </div>
            </Link>
          </div>
          <button
            onClick={logoutHandler}
            className="w-full bg-red-500 md:font-semibold px-8 py-4 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300  hover:-translate-y-0.5">
            Logout
          </button>
        </div>
      </div>
      <section className="my-4 mx-4 grid gap-4  text-center">
        <hr />
        <p className="font-medium">
          Copyright 2025@ neu.pvt@onlineStore.com - All Right Reserved.
        </p>
      </section>
    </>
  );
};

export default UserPage;
