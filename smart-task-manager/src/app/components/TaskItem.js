"use client";

import React from "react";

const TaskItem = ({ task, provided }) => {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      className="p-4 bg-gray-100 rounded-lg shadow-md mb-2"
      style={{ ...provided.draggableProps.style, cursor: "move" }} // Ensure the cursor is set to move
    >
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-sm text-gray-500">{task.status}</p>
      <p className="text-sm text-gray-500">
        Assignees: {task.assignees.map((assignee) => assignee.label).join(", ")}
      </p>
    </div>
  );
};

export default TaskItem;