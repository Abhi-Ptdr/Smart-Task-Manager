"use client";

import React, { useState } from "react";
import CategoryCard from "./components/CategoryCard";
import TimelineDashboard from "./components/TimelineDashboard";
import TaskModal from "./components/TaskModal";
import { useTaskStore } from "./store/taskStore";

const CATEGORIES = [
  "General Information",
  "Backlog",
  "In Progress",
  "Paused",
  "Ready For Launch",
];

const HomePage = () => {
  const { tasks, addTask, editTask } = useTaskStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("");

  const openModal = (category) => {
    setCurrentCategory(category);
    setEditingTask(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTask(null);
    setCurrentCategory("");
  };

  // Add or edit task
  const handleAddTask = (task) => {
    const newTask = {
      id: Date.now().toString(), // Ensure unique ID
      ...task,
      category: currentCategory, // Assign correct category
    };

    if (editingTask) {
      editTask({ ...task, id: editingTask.id, category: currentCategory });
    } else {
      addTask(newTask);
    }
    closeModal();
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Task Manager</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CATEGORIES.map((category) => (
          <CategoryCard
            key={category}
            title={category}
            category={category}
            tasks={tasks} // Make sure tasks is properly passed
            onAddTask={() => openModal(category)}
            onEditTask={(task) => {
              setEditingTask(task);
              setCurrentCategory(category);
              setModalOpen(true);
            }}
          />
        ))}
      </div>
      <TimelineDashboard tasks={tasks} />
      {isModalOpen && (
        <TaskModal
          isEditing={!!editingTask}
          taskToEdit={editingTask}
          onClose={closeModal}
          category={currentCategory} // Pass the current category to the modal
        />
      )}
    </div>
  );
};

export default HomePage;