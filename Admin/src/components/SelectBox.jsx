import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function AnimatedDropdown({
  setOption,
  options,
  label,
  setCategoryValue,
  setSubCategoryValue,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setOption(option);
  };

  return (
    <div className="relative w-full max-w-[360px]">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
        aria-haspopup="listbox"
        aria-expanded={isOpen}>
        <span className="truncate">{selected}</span>
        <RiArrowDropDownLine
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}
        role="listbox">
        {options.map((option) => (
          <div
            key={option}
            onClick={(e) => {
              handleSelect(option);
              {
                label === "category" && setCategoryValue(e.target.innerText);
              }
              {
                label === "subCategory" &&
                  setSubCategoryValue(e.target.innerText);
              }
            }}
            role="option"
            aria-selected={selected === option}
            className={`px-4 py-2 text-sm cursor-pointer transition-colors duration-200 ${
              selected === option
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-indigo-100"
            }`}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}
