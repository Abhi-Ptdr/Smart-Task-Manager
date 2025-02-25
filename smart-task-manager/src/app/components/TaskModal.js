"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";

const employees = [
  { value: "Bob", label: "Bob" },
  { value: "David", label: "David" },
  { value: "Eve", label: "Eve" },
  { value: "Alice", label: "Alice" },
  { value: "Jack", label: "Jack" },
  { value: "Emily", label: "Emily" },
  { value: "Michael", label: "Michael" },
  { value: "Charlie", label: "Charlie" },
  { value: "Sophia", label: "Sophia" },
  { value: "James", label: "James" },
  { value: "Olivia", label: "Olivia" },
  { value: "Daniel", label: "Daniel" },
]; // Example employee names

const formatDateTime = (dateTime) => {
  const date = new Date(dateTime);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const TaskModal = ({ isEditing = false, taskToEdit = null, onClose, category, onSave }) => {
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [start, setStart] = useState(taskToEdit ? formatDateTime(taskToEdit.start) : "");
  const [end, setEnd] = useState(taskToEdit ? formatDateTime(taskToEdit.end) : "");
  const [assignees, setAssignees] = useState(taskToEdit?.assignees.map(assignee => ({ value: assignee, label: assignee })) || []);

  useEffect(() => {
    if (isEditing && taskToEdit) {
      setTitle(taskToEdit.title);
      setStart(formatDateTime(taskToEdit.start));
      setEnd(formatDateTime(taskToEdit.end));
      setAssignees(taskToEdit.assignees.map(assignee => ({ value: assignee, label: assignee })));
    }
  }, [isEditing, taskToEdit]);

  const handleSave = () => {
    const task = {
      title,
      start,
      end,
      assignees: assignees.map((assignee) => assignee.value),
      category,
    };
    onSave(task);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{isEditing ? "Edit Task" : "Add Task"}</h2>
          <button onClick={onClose} className="button-12">
            &times;
          </button>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Start</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">End</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
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
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="button-12">
              Cancel
            </button>
            <button type="submit" className="button-12">
              {isEditing ? "Update" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;