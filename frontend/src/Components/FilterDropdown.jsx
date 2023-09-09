import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const FilterDropdown = ({ handleSortByPrice }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      id="store"
      className="w-full z-28 top-0 px-6 py-1 items-end justify-items-end"
    >
      <div className="ml-auto items-end justify-items-end w-1/4 container  flex flex-wrap mt-0 px-2 py-3">
        <div className="flex items-end ml-auto" id="store-nav-content">
          <div className="relative inline-block text-left">
            <button
              type="button"
              className=" ml-auto sm:pl-3 p-3 sm:rounded-full border-solid border-2 border-gray-400 hover:text-black focus:outline-none"
              id="priceSortDropdown"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              onClick={handleToggleDropdown}
            >
              Ordenar por Preço
              <FaAngleDown // Use o ícone SVG importado
                className={`inline-block ml-1 ${
                  isDropdownOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>
            {isDropdownOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="priceSortDropdown"
                id="priceSortDropdownMenu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleSortByPrice("asc")}
                  >
                    Menor Preço
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    onClick={() => handleSortByPrice("desc")}
                  >
                    Maior Preço
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default FilterDropdown;
