"use client";

import React from "react";

const Loading = () => {
  const items = [];

  for (let i = 0; i < 8; i++) {
    items.push(
      <div
        key={i}
        className="p-4 bg-white rounded-lg overflow-hidden shadow hover:shadow-md rounded-lg"
        style={{ width: "300px", height: "250px" }}
      >
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
      {items}
    </div>
  );
};

export default Loading;
