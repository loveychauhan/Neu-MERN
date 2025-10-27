import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-between z-50  fixed top-0 px-4 bg-white md:px-16 py-2 md:px-4 w-full shadow-md backdrop-md ">
        <div className="max-w-[140px] sm:max-w-[200px]">
          <NavLink to="/">
            <h1 className="text-3xl font-bold text-black ">Neu</h1>
          </NavLink>
        </div>

        <button className="px-4 py-2 rounded-xl text-white bg-blue-700">
          ADMIN
        </button>
      </header>
    </>
  );
}
