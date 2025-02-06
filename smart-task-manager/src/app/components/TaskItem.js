"use client";

import React from "react";

const TaskItem = ({ task, provided }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="p-4 bg-gray-100 rounded-lg shadow-md mb-2"
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.status}</p>
    </div>
  );
};

export default TaskItem;
