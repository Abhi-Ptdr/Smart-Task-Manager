"use client";

import React, { useEffect, useState } from "react";
import Timeline from "react-calendar-timeline";
import { useTaskStore } from "../store/taskStore";
import moment from "moment";

const TimelineDashboard = () => {
  const { tasks } = useTaskStore();
  const [timelineData, setTimelineData] = useState([]);
  const [defaultTimeStart, setDefaultTimeStart] = useState(null);
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(null);

  useEffect(() => {
    const formattedTasks = tasks.map((task) => ({
      id: task.id,
      group: 1,
      title: task.title,
      start_time: moment(task.start),
      end_time: moment(task.end),
    }));
    setTimelineData(formattedTasks);

    // Set default time range
    setDefaultTimeStart(moment().add(-12, "hour"));
    setDefaultTimeEnd(moment().add(12, "hour"));
  }, [tasks]);

  if (!defaultTimeStart || !defaultTimeEnd) {
    return null; // Render nothing until the default times are set
  }

  return (
    <div className="mt-6">
      <Timeline
        groups={[{ id: 1, title: "Tasks" }]}
        items={timelineData}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
      />
    </div>
  );
};

export default TimelineDashboard;