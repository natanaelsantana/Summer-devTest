"use client";

import React from "react";
import ProductList from "../Components/ProductList";
import SectionBanner from "../Components/SectionBanner";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SectionBanner />
      <ProductList />
    </div>
  );
};

export default HomePage;
