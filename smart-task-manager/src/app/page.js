"use client";

import React, { useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useRouter } from "next/navigation";
import CategoryCard from "./components/CategoryCard";
import TaskModal from "./components/TaskModal";
import { useTaskStore } from "./store/taskStore";
import { MdDashboard } from "react-icons/md";

const CATEGORIES = [
  "General Information",
  "Backlog",
  "In Progress",
  "Paused",
  "Ready For Launch",
];

const HomePage = () => {
  const { tasks, addTask, editTask, updateTaskCategory, deleteTask } = useTaskStore();
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("");
  const router = useRouter();

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

  const handleAddTask = (task) => {
    const newTask = {
      id: `${Date.now()}`, // Ensure unique ID
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

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // If the task is dropped in the same category, reorder the tasks
    if (source.droppableId === destination.droppableId) {
      // Handle reordering logic here if needed
    } else {
      // Update the task category
      const taskId = result.draggableId;
      updateTaskCategory(taskId, destination.droppableId);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-4">
        <div className="flex justify-between mt-2">
          <h1 className="text-2xl font-bold">Smart Task Manager</h1>
          <button
            onClick={() => router.push("/members")}
            className="button-13"
          >
            <div className="flex items-center justify-center space-x-2">
              <div>Members Dashboards</div>
              <div><MdDashboard /></div>
            </div>
          </button>
        </div>
        <hr className="hr mb-10 mt-3"/>
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
              onDeleteTask={deleteTask}
            />
          ))}
        </div>
        {isModalOpen && (
          <TaskModal
            isEditing={!!editingTask}
            taskToEdit={editingTask}
            onClose={closeModal}
            category={currentCategory} // Pass the current category to the modal
          />
        )}
      </div>
    </DragDropContext>
  );
};

export default HomePage;