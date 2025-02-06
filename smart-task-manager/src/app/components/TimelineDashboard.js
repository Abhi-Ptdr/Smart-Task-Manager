"use client";

import React from "react";
import Timeline from "react-calendar-timeline";
import { useTaskStore } from "../store/taskStore";

const TimelineDashboard = () => {
  const { tasks } = useTaskStore();

  const timelineData = tasks.map((task) => ({
    id: task.id,
    group: 1,
    title: task.title,
    start_time: new Date(task.start),
    end_time: new Date(task.end),
  }));

  return (
    <div className="mt-6">
      <Timeline
        groups={[{ id: 1, title: "Tasks" }]}
        items={timelineData}
        defaultTimeStart={new Date()}
        defaultTimeEnd={new Date().setHours(new Date().getHours() + 4)}
      />
    </div>
  );
};

export default TimelineDashboard;
