import { NavLink } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
// import { CiViewList } from "react-icons/ci";
import { BiSolidPurchaseTag } from "react-icons/bi";

export default function Sidebar() {
  return (
    <aside className="w-full gap-4 flex sm:flex-col  items-center justify-between flex-wrap  sm:max-w-[200px] sm:space-y-6 w-full sm:pl-6  sm:h-screen mt-20 border-b-2 sm:border-b-0 pb-2 sm:border-r-2 border-gray-200  sm:block">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium ${
            isActive ? "bg-gray-200" : ""
          }`
        }>
        <IoAddCircleOutline className="text-2xl" />
        <div>Add Items</div>
      </NavLink>
      {/* <NavLink
        to="/list-item"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium ${
            isActive ? "bg-gray-200" : ""
          }`
        }>
        <CiViewList className="text-2xl" />
        <div>List Items</div>
      </NavLink> */}
      <NavLink
        to="/order-item"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-2 border border-gray-200 rounded-md text-sm font-medium ${
            isActive ? "bg-gray-200" : ""
          }`
        }>
        <BiSolidPurchaseTag className="text-2xl" />
        <div>Order Items</div>
      </NavLink>
    </aside>
  );
}
