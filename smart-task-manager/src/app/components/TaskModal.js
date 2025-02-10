"use client";

import React, { useState } from "react";
import { useTaskStore } from "../store/taskStore";
import Select from "react-select";

const employees = [
  { value: "Alice", label: "Alice" },
  { value: "Bob", label: "Bob" },
  { value: "Charlie", label: "Charlie" },
  { value: "David", label: "David" },
]; // Example employee names

const TaskModal = ({ isEditing = false, taskToEdit = null, onClose, category }) => {
  const { addTask, editTask } = useTaskStore();
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [start, setStart] = useState(taskToEdit?.start || "");
  const [end, setEnd] = useState(taskToEdit?.end || "");
  const [assignees, setAssignees] = useState(taskToEdit?.assignees || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: isEditing ? taskToEdit.id : `${Date.now()}`, // Ensure unique ID
      title,
      start,
      end,
      assignees,
      category,
    };
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{isEditing ? "Edit Task" : "Add Task"}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
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
          <div className="mb-4">
            <label className="block mb-2 font-medium">Assignees</label>
            <Select
              isMulti
              value={assignees}
              onChange={setAssignees}
              options={employees}
              className="w-full"
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
            <button type="submit" className="px-4 py-2 rounded">
              {isEditing ? "Save" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;