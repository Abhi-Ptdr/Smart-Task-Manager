"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import TimelineDashboard from "../components/TimelineDashboard";
import Buttons from "../components/Buttons";
import Dock from "../components/Dock";
import Footer from "../components/Footer";
import { getTasks } from "../api/taskService";

const MembersDashboard = () => {
  const router = useRouter();
  const [view, setView] = useState("day");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="p-4 flex flex-col min-h-screen">
        <div className="flex justify-between mt-2">
          <div className="flex items-center justify-center space-x-2">
            <img className="logo" src="/TaskLogo.png" alt="Task Logo" />
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Dock />
            <Buttons />
          </div>
        </div>
        <hr className="mb-10 mt-3" />
        <div className="heading">
          <h1 className="text-2xl font-bold text-center">Your Tasks Timing</h1>
        </div>
        <div className="mt-6 mb-4 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:flex lg:justify-center lg:space-x-2 animate-fade-in-up justify-center viewbtns">
          <button onClick={() => setView("year")} className="button-13 animate-pulse">
            <span className="text">Year View</span>
          </button>
          <button onClick={() => setView("month")} className="button-13 animate-pulse">
            <span className="text">Month View</span>
          </button>
          <button onClick={() => setView("day")} className="button-13 animate-pulse">
            <span className="text">Day View</span>
          </button>
          <button onClick={() => setView("hour")} className="button-13 animate-pulse">
            <span className="text">Hour View</span>
          </button>
        </div>
        <div className="flex-grow animate-fade-in-up">
          <TimelineDashboard tasks={tasks} view={view} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembersDashboard;