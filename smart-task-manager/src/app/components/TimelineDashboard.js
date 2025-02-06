"use client";

import React from "react";
import Timeline from "react-calendar-timeline";

const TimelineDashboard = ({ tasks = [] }) => {
  if (!tasks || tasks.length === 0) {
    return <p className="text-center text-gray-500">No tasks available</p>;
  }

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
        defaultTimeEnd={new Date().setHours(new Date().getHours() + 2)}
      />
    </div>
  );
};

export default TimelineDashboard;
