import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const options = [
  { label: "Sort By: Relevant", value: "" },
  { label: "Price: Low to High", value: "lowToHigh" },
  { label: "Price: High to Low", value: "HighToLow" },
];

export default function AnimatedDropdown({ optionsHandler }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    optionsHandler({ target: { value: option.value } });
  };

  return (
    <div ref={dropdownRef} className="relative w-64">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-mullRed transition-all duration-300">
        {selected.label}
        <RiArrowDropDownLine
          className={`text-xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        }`}>
        {options.map((option, idx) => (
          <div
            key={idx}
            onClick={() => handleSelect(option)}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-mullRed hover:text-white cursor-pointer transition-colors duration-200">
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
}
