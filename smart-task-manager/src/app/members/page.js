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
          className="button-13" style={{ width: "100px" }}
        >
          Home
        </button>
      </div>
      <TimelineDashboard />
    </div>
  );
};

export default MembersDashboard;