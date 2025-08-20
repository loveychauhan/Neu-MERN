import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between  fixed top-0 px-4 bg-white md:px-16 py-2 md:px-4 w-full shadow-md backdrop-md ">
        <div className="sm:max-w-[180px] max-w-[120px] ">
          <NavLink to="/">
            <img className="w-full" src={assets.logo} alt="" />
          </NavLink>
        </div>
        <div>
          <ul className="flex gap-4 md:gap-8 hidden sm:flex">
            <NavLink to="/" className="w-full">
              <li>Home</li>
            </NavLink>
            <NavLink to="/collection" className="w-full">
              <li>Collections</li>
            </NavLink>
            <NavLink to="/about" className="w-full">
              <li>About</li>
            </NavLink>
            <NavLink to="/contact" className="w-full">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-8">
          <img
            src={assets.search_icon}
            className="w-5 cursor-pointer"
            alt="search icon"
          />
          <img
            src={assets.profile_icon}
            className="w-5 cursor-pointer"
            alt="search icon"
          />

          <Link to="/cart">
            <img
              src={assets.cart_icon}
              className="w-5 cursor-pointer"
              alt="search icon"
            />
          </Link>
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 sm:hidden block  cursor-pointer"
            alt=""
          />
        </div>
        {/* sidebar */}
      </header>
      <div
        className={`absolute top-0 bottom-0 right-0 transition-all ease-in-out duration-300  overflow-hidden h-[100vh] text-black bg-white ${
          visible ? "w-[100%]" : "w-0"
        }`}>
        <div className="flex flex-col">
          <div
            className="p-4 flex gap-2 items-center  "
            onClick={() => setVisible(false)}>
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
            <p>Back</p>
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-2 cursor-pointer"
            to="/">
            Home
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-2 cursor-pointer"
            to="/collection">
            Collection
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-2 cursor-pointer"
            to="/contact">
            Contact
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="pl-2 cursor-pointer"
            to="/about">
            About
          </NavLink>
        </div>
      </div>
    </>
  );
}
