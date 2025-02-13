"use client";

import React, { useState } from "react";

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleAddCategory = () => {
    if (categoryName.trim()) {
      onAddCategory(categoryName);
      setCategoryName("");
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddCategory();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Category</h2>
        <input
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 p-2 rounded-lg w-full mb-4"
          placeholder="Enter category name"
        />
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="button-13"
          >
            Cancel
          </button>
          <button
            onClick={handleAddCategory}
            className="button-64"
          >
            <span className="text">Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategoryModal;