"use client";

import React from "react";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();

  const navigateToTaskManager = () => {
    router.push("/task-manager");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Smart Task Manager</h1>
      <p className="text-lg mb-8">Manage your tasks efficiently and effectively.</p>
      <button
        onClick={navigateToTaskManager}
        className="button-64"
      >
        <span className="text">Go to Task Manager</span>
      </button>
    </div>
  );
};

export default LandingPage;