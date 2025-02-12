"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TimelineDashboard from "../components/TimelineDashboard";
import { FaHome } from "react-icons/fa";

const MembersDashboard = () => {
  const router = useRouter();
  const [view, setView] = useState("year");

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
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
      <div className="flex space-x-2 mb-4">
        <button onClick={() => setView("year")} className="button-13">
          Year View
        </button>
        <button onClick={() => setView("month")} className="button-13">
          Month View
        </button>
        <button onClick={() => setView("day")} className="button-13">
          Day View
        </button>
        <button onClick={() => setView("hour")} className="button-13">
          Hour View
        </button>
      </div>
      <TimelineDashboard view={view} />
    </div>
  );
};

export default MembersDashboard;