import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ title, classess = "", options = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (option) => {
    onSelect?.(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div
        className={`px-6 py-[6px] bg-dropBg text-[#fff] gap-4 flex flex-row items-center justify-center rounded-[3px] cursor-pointer ${classess}`}
        onClick={toggleDropdown}
      >
        <span className="font-medium text-sm text-[#fff]">{title}</span>
        <ChevronDown className="text-[#fff] h-4 w-4" />
      </div>

      {isOpen && (
        <div className="absolute right-0 max-w-[150px] z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-primary text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
