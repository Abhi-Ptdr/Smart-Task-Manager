"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TimelineDashboard from "../components/TimelineDashboard";
import Buttons from "../components/Buttons";
import Dock from "../components/Dock";
import Footer from "../components/Footer";

const MembersDashboard = () => {
  const router = useRouter();
  const [view, setView] = useState("day");

  return (
    <>
    <div className="p-4 flex flex-col">
      <div className="flex justify-between mt-2">
        <div className="flex items-center justify-center space-x-2">
          <img className="logo" src="/TaskLogo.png" alt="Task Logo" />
          <h1 className="text-2xl font-bold">Task Manager</h1>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Dock />      
          <Buttons  />
        </div>
      </div>
      <hr className="mb-10 mt-3" />
      <div className="heading">
        <h1 className="text-2xl font-bold text-center">Your Tasks Timimg</h1>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:flex md:justify-center md:space-x-2">
        <button onClick={() => setView("year")} className="button-13">
          <span className="text">Year View</span>
        </button>
        <button onClick={() => setView("month")} className="button-13">
          <span className="text">Month View</span>
        </button>
        <button onClick={() => setView("day")} className="button-13">
          <span className="text">Day View</span>
        </button>
        <button onClick={() => setView("hour")} className="button-13">
          <span className="text">Hour View</span>
        </button>
      </div>
      <div className="flex-grow">
        <TimelineDashboard view={view} />
      </div>
    </div>
    <Footer />
    </>
  );
};

export default MembersDashboard;