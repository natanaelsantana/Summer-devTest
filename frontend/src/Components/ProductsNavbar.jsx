"use client";

import React, { useState, useEffect } from "react";
import { getAllTypes } from "../services/productServices";
import SectionChanger from "./sectionChanger";
import { useType } from "../Utils/contextProvider";

export const ProductsNavbar = () => {
  const [types, setAllTypes] = useState(null);
  const { selectType } = useType();
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu hamburguer

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const types = await getAllTypes();
        // Use a Set to store unique types
        const uniqueTypes = new Set(types);
        // Convert the Set back to an array
        const uniqueTypesArray = Array.from(uniqueTypes);
        setAllTypes(uniqueTypesArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTypes();
  }, []);

  const handleAllproducts = () => {
    try {
      selectType(null);
      // Fecha o menu hamburguer quando um item é selecionado
      setMenuOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleMenu = () => {
    // Função para alternar a visibilidade do menu hamburguer
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gray-200 text-black shadow-md rounded z-30 left-0 w-full">
        <nav
          id="products_navbar"
          className="flex w-full z-30 top-0 py-1 justify-between items-center"
        >
          {/* Botão de hamburguer para telas menores */}
          <button
            className="sm:hidden block px-4 py-2 text-black focus:outline-none"
            onClick={toggleMenu}
          >
            &#9776; {/* Ícone de hamburguer */}
          </button>

          {/* Menu principal para telas maiores */}
          <ul className="hidden sm:flex flex justify-between flex-wrap">
            <li className="flex-1 p-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-center">
              <a onClick={handleAllproducts} className="text-sm">
                Todos os Produtos
              </a>
            </li>
            {types &&
              types.map((type) => (
                <li
                  className="flex-1 p-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-center"
                  key={type}
                >
                  <SectionChanger type={type} />
                </li>
              ))}
          </ul>
        </nav>

        {/* Menu hamburguer para telas menores */}
        <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
          <ul className="py-2">
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-center">
              <a onClick={handleAllproducts} className="text-sm">
                Todos os Produtos
              </a>
            </li>
            {types &&
              types.map((type) => (
                <li
                  className="p-3 hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-center"
                  key={type}
                >
                  <SectionChanger type={type} />
                </li>
              ))}
          </ul>
        </div>
      </header>
    </div>
  );
};
