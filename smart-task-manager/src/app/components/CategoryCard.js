"use client";

import React, { useState, useEffect, useRef } from "react";
import TaskList from "./TaskList";

const CategoryCard = ({ title, category, tasks, onAddTask, onEditTask, onDeleteTask }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleAddTask = () => {
    setIsExpanded(true);
    onAddTask();
  };

  return (
    <div
      ref={cardRef}
      className="category-card p-4 bg-white rounded-lg shadow-md mb-4 flex flex-col opacity-0 transition-opacity duration-500"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button
          onClick={handleAddTask}
          className="button-64"
        >
          <span className="text">Add Task</span>
        </button>
      </div>
      <div className="task-list-container flex-grow overflow-y-auto">
        <TaskList category={category} tasks={tasks} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      </div>
    </div>
  );
};

export default CategoryCard;