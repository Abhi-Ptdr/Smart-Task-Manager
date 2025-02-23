"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaTasks, FaPlus, FaEdit, FaTrash, FaRegCalendarAlt, FaChartLine } from "react-icons/fa";
import "./style.css";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="landing-page">
      <div className="video-background">
        <video autoPlay muted loop className="background-video">
          <source src="/neon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">Welcome to Smart Task Manager</h1>
          <p className="text-2xl text-white mb-8 animate-fade-in">Manage your tasks efficiently and effectively.</p>
          <button
            onClick={() => router.push("/task-manager")}
            className="button-64 animate-bounce mb-8"
          >
            <span className="text">Go to Task Manager</span>
          </button>
          <div className="features-grid">
            <div className="feature animate-fade-in">
              <FaTasks className="feature-icon" />
              <span>Manage Task</span>
            </div>
            <div className="feature animate-fade-in">
              <FaPlus className="feature-icon" />
              <span>Add Task</span>
            </div>
            <div className="feature animate-fade-in">
              <FaEdit className="feature-icon" />
              <span>Update Task</span>
            </div>
            <div className="feature animate-fade-in">
              <FaTrash className="feature-icon" />
              <span>Delete Task</span>
            </div>
            <div className="feature animate-fade-in">
              <FaRegCalendarAlt className="feature-icon" />
              <span>View Timeline</span>
            </div>
            <div className="feature animate-fade-in">
              <FaChartLine className="feature-icon" />
              <span>Analyze Tasks</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;