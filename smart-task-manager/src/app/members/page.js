"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TimelineDashboard from "../components/TimelineDashboard";
import { FaHome } from "react-icons/fa";

const MembersDashboard = () => {
  const router = useRouter();
  const [view, setView] = useState("day");

  return (
    <div className="p-4 flex flex-col">
      <div className="flex justify-between mt-2">
        <h1 className="text-2xl font-bold">Members Dashboard</h1>
        <button
          onClick={() => router.push("/")}
          className="button-13"
          style={{ width: "120px" }}
        >
          <div className="flex items-center justify-center space-x-2">
            <div>Home</div>
            <div>
              <FaHome />
            </div>
          </div>
        </button>
      </div>
      <hr className="mb-10 mt-3" style={{color:"white"}} />
      <div className="grid grid-cols-2 gap-2 md:flex md:justify-center md:space-x-2">
        <button onClick={() => setView("year")} className="button-64">
          <span className="text">Year View</span>
        </button>
        <button onClick={() => setView("month")} className="button-64">
          <span className="text">Month View</span>
        </button>
        <button onClick={() => setView("day")} className="button-64">
          <span className="text">Day View</span>
        </button>
        <button onClick={() => setView("hour")} className="button-64">
          <span className="text">Hour View</span>
        </button>
      </div>
      <div className="flex-grow">
        <TimelineDashboard view={view} />
      </div>
    </div>
  );
};

export default MembersDashboard;