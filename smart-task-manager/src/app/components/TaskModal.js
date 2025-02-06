"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/taskStore";

const TaskModal = ({ isEditing = false, taskToEdit = null, onClose }) => {
  const { addTask, editTask } = useTaskStore();
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [start, setStart] = useState(taskToEdit?.start || "");
  const [end, setEnd] = useState(taskToEdit?.end || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { id: isEditing ? taskToEdit.id : Date.now(), title, start, end };
    if (isEditing) {
      editTask(task);
    } else {
      addTask(task);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Task" : "Add Task"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Start Date</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">End Date</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
              {isEditing ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
