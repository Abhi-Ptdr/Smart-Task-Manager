"use client";

import React from "react";
import { useModalStore } from "../store/modalStore";

const TaskModal = () => {
  const { isOpen, closeModal, task } = useModalStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">{task ? "Edit Task" : "New Task"}</h2>
        {/* Form Fields Here */}
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
