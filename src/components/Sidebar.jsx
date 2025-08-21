import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

export default function Sidebar({ setVisible, visible }) {
  return (
    <div
      className={`absolute top-0 z-100 bottom-0 right-0 transition-all ease-in-out duration-300  overflow-hidden h-screen text-black bg-white ${
        visible ? "w-screen" : "w-0"
      }`}>
      <div className="flex flex-col ">
        <div
          className="p-4 flex gap-2 items-center cursor-pointer  "
          onClick={() => setVisible(false)}>
          <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="" />
          <p>Back</p>
        </div>
        <NavLink
          onClick={() => setVisible(false)}
          className="p-2 cursor-pointer"
          to="/">
          Home
        </NavLink>
        <NavLink
          onClick={() => setVisible(false)}
          className="p-2 cursor-pointer"
          to="/collection">
          Collection
        </NavLink>
        <NavLink
          onClick={() => setVisible(false)}
          className="p-2 cursor-pointer"
          to="/contact">
          Contact
        </NavLink>
        <NavLink
          onClick={() => setVisible(false)}
          className="p-2 cursor-pointer"
          to="/about">
          About
        </NavLink>
      </div>
    </div>
  );
}
