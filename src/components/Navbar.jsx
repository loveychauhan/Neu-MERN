import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between fixed top-0 px-4 md:px-8 py-2 md:px-4 w-full shadow-md backdrop-md ">
      <div className="sm:max-w-[180px] max-w-[120px] ">
        <NavLink to="/">
          <img className="w-full" src={assets.logo} alt="" />
        </NavLink>
      </div>
      <div>
        <ul className="flex gap-4 md:gap-8 hidden sm:flex">
          <NavLink
            to="/"
            className="w-full"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
              borderBottom: isActive ? "red" : "",
            })}>
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/collection"
            className="w-full"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}>
            <li>Collections</li>
          </NavLink>
          <NavLink
            to="/about"
            className="w-full"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}>
            <li>About</li>
          </NavLink>
          <NavLink
            to="/contact"
            className="w-full"
            style={({ isActive }) => ({
              color: isActive ? "red" : "",
            })}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className="flex gap-4 sm:gap-8">
        <button className="w-4">
          <img src={assets.search_icon} alt="search icon" />
        </button>
        <button className="w-4">
          <img src={assets.profile_icon} alt="search icon" />
        </button>
        <button className="w-4">
          <img src={assets.cart_icon} alt="search icon" />
        </button>
      </div>
    </header>
  );
}
