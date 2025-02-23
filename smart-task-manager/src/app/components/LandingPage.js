"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FaTasks, FaPlus, FaEdit, FaTrash, FaRegCalendarAlt, FaChartLine } from "react-icons/fa";
import "./style.css";
import Buttons from "./Buttons";
import Dock from "./Dock";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="landing-page">
      <div className="video-background">
        <video autoPlay muted loop className="background-video">
          <source src="/grey.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="mx-2 px-2">
          <div className="flex justify-between mt-2 header">
            <div className="flex items-center justify-center space-x-2">
              <img className="logo" src="/TaskLogo.png" alt="Task Logo" />
              <h1 className="text-2xl font-bold">Task Manager</h1>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Dock />      
              <Buttons  />
            </div>
          </div>
          <hr className="hr mb-10 mt-3"/>

          <div className="content">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fade-in">Welcome to Smart Task Manager</h1>
            <p className="text-xl text-white mb-8 animate-fade-in">Manage your tasks efficiently and effectively.</p>

            <button
              onClick={() => router.push("/task-manager")}
              className="button-13 animate-fade-in mb-8"
            >
              <span className="text">Go to Task Manager</span>
            </button>
            <div className="features-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

              <div className="feature animate-fade-in-up p-4" onClick={() => router.push("/task-manager")}>
                <FaTasks className="feature-icon" />
                <span>Manage Task</span>
              </div>
              <div className="feature animate-fade-in-up2 p-4" onClick={() => router.push("/task-manager")}>
                <FaPlus className="feature-icon" />
                <span>Add Task</span>
              </div>
              <div className="feature animate-fade-in-up3 p-4" onClick={() => router.push("/task-manager")}>
                <FaEdit className="feature-icon" />
                <span>Update Task</span>
              </div>
              <div className="feature animate-fade-in-up4 p-4" onClick={() => router.push("/task-manager")}>
                <FaTrash className="feature-icon" />
                <span>Delete Task</span>
              </div>
              <div className="feature animate-fade-in-up5 p-4" onClick={() => router.push("/members")}>
                <FaRegCalendarAlt className="feature-icon" />
                <span>View Timeline</span>
              </div>
              <div className="feature animate-fade-in-up6 p-4" onClick={() => router.push("/members")}>
                <FaChartLine className="feature-icon" />
                <span>Analyze Tasks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
