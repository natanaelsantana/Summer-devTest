"use client";
import React, { createContext, useState, useContext } from "react";

const TypeContext = createContext();

export const useType = () => {
  return useContext(TypeContext);
};

export const TypeProvider = ({ children }) => {
  const [selectedType, setSelectedType] = useState(null);

  const selectType = (type) => {
    setSelectedType(type);
  };

  return (
    <TypeContext.Provider value={{ selectedType, selectType }}>
      {children}
    </TypeContext.Provider>
  );
};
