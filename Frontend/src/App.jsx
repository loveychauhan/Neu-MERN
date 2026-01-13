import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { ShopContext } from "./context/contextProvider";
import { useContext } from "react";
import UserPage from "./pages/UserPage";
import OrderPage from "./pages/OrderPage";

function App() {
  const { searchbtnClick } = useContext(ShopContext);

  return (
    <>
      <Navbar />

      <section
        className={` rounded-[4px] right-4 md:right-8 border-b-gray-700 border-1 fixed top-16 z-50  md:right-8 w-full  sm:max-w-[480px] max-w-[280px] bg-white sm:mx-8 ${
          searchbtnClick ? " opacity-100 scroll-my-0" : "opacity-0"
        } transition-all duration-200 ease-in-out`}>
        <SearchBar searchbtnClick={searchbtnClick} />
      </section>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-space" element={<UserPage />} />
        <Route path="/orders" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
