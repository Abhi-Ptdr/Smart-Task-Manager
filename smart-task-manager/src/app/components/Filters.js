"use client";

import React from "react";
import { useTaskStore } from "../store/taskStore";

const Filters = () => {
  const { tasks } = useTaskStore();
  return (
    <input className="border p-2" placeholder="Search Tasks..." />
  );
};

export default Filters;
