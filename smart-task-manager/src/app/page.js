"use client"; // Ensures it runs in the browser

import React from "react";
import TaskList from "./components/TaskList";
import TimelineDashboard from "./components/TimelineDashboard";
import TaskModal from "./components/TaskModal";
import Filters from "./components/Filters";

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Task Manager</h1>
      <Filters />
      <TaskList />
      <TimelineDashboard />
      <TaskModal />
    </div>
  );
};

export default HomePage;
