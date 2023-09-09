import React from "react";

export const SearchBar = () => {
  return (
    <div className="relative p-4 ml-5">
      <input
        type="text"
        placeholder="Pesquisar"
        className="rounded-full border border-gray-400 py-2 px-4 focus:outline-none focus:border-gray-600 text-lg sm:w-64"
      />
    </div>
  );
};
