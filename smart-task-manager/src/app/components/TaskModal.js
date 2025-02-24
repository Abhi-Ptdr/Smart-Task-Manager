"use client";

import React, { useState, useEffect } from "react";
import Select from "react-select";

const employees = [
  { value: "Alice", label: "Alice" },
  { value: "Bob", label: "Bob" },
  { value: "Charlie", label: "Charlie" },
  { value: "David", label: "David" },
]; // Example employee names

const TaskModal = ({ isEditing = false, taskToEdit = null, onClose, category, onSave }) => {
  const [title, setTitle] = useState(taskToEdit?.title || "");
  const [start, setStart] = useState(taskToEdit?.start || "");
  const [end, setEnd] = useState(taskToEdit?.end || "");
  const [assignees, setAssignees] = useState(taskToEdit?.assignees.map(assignee => ({ value: assignee, label: assignee })) || []);

  useEffect(() => {
    if (isEditing && taskToEdit) {
      setTitle(taskToEdit.title);
      setStart(taskToEdit.start);
      setEnd(taskToEdit.end);
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
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
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