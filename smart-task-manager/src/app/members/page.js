"use client";

import React from "react";
import { useRouter } from "next/navigation";
import TimelineDashboard from "../components/TimelineDashboard";

const MembersDashboard = () => {
  const router = useRouter();

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Members Dashboard</h1>
        <button
          onClick={() => router.push("/")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Home
        </button>
      </div>
      <TimelineDashboard />
    </div>
  );
};

export default MembersDashboard;