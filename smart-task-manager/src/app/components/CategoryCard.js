"use client";

import React, { useState } from "react";
import TaskList from "./TaskList";

const CategoryCard = ({ title, category, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleAddTask = () => {
    setIsExpanded(true);
    onAddTask();
  };

  return (
    <div className={`category-card p-4 bg-white rounded-lg shadow-md mb-4 flex flex-col ${isExpanded ? 'expanded' : ''}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={handleAddTask}
          className="button-64"
        >
          <span className="text">Add Task</span>
        </button>
      </div>
      <TaskList category={category} tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
    </div>
  );
};

export default CategoryCard;