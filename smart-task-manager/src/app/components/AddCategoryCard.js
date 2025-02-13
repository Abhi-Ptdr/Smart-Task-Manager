"use client";

import React from "react";

const AddCategoryCard = ({ onAddCategory }) => {
  return (
    <div
      className="category-card p-4 bg-white rounded-lg shadow-md mb-4 flex flex-col justify-center items-center cursor-pointer hover:bg-gray-100 transition-all"
      onClick={onAddCategory}
    >
      <h2 className="text-xl font-bold">+ Add Category</h2>
    </div>
  );
};

export default AddCategoryCard;