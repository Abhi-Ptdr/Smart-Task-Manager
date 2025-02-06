import React from "react";
import TaskList from "./TaskList"; // Import TaskList

const CategoryCard = ({ title, category, tasks, onAddTask, onEditTask }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <TaskList category={category} /> {/* Use TaskList for filtered tasks */}
      <button
        onClick={onAddTask}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded self-end"
      >
        + Add Task
      </button>
    </div>
  );
};

export default CategoryCard;
