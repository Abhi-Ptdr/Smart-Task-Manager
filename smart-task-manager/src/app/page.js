"use client";

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TimelineDashboard from "./components/TimelineDashboard";
import TaskModal from "./components/TaskModal";
import Filters from "./components/Filters";

const HomePage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openModal = (task = null) => {
    setEditingTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTask(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Task Manager</h1>
      <button
        onClick={() => openModal()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        + Add Task
      </button>
      <Filters />
      <TaskList onEdit={openModal} />
      <TimelineDashboard />
      {isModalOpen && (
        <TaskModal
          isEditing={!!editingTask}
          taskToEdit={editingTask}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default HomePage;
