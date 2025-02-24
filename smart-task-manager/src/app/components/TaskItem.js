"use client";

import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const TaskItem = ({ task, provided, onEditTask, onDeleteTask }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="task-item p-4 bg-gray-100 rounded-lg shadow-md mb-2 flex justify-between items-center hover:bg-gray-200 transition-all"
    >
      <div>
        <h3 className="font-bold">{task.title}</h3>
        <p className="text-sm text-gray-500">{task.status}</p>
        <p className="text-sm text-gray-500">
          Assignees: {task.assignees.join(", ")}
        </p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => onEditTask(task)} className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button onClick={() => onDeleteTask(task._id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;