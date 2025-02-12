"use client";

import React, { useEffect, useState } from "react";
import Timeline from "react-calendar-timeline";
import { useTaskStore } from "../store/taskStore";
import moment from "moment";

const categoryClasses = {
  "General Information": "category-general",
  "Backlog": "category-backlog",
  "In Progress": "category-in-progress",
  "Paused": "category-paused",
  "Ready For Launch": "category-ready-for-launch",
};

const TimelineDashboard = () => {
  const { tasks } = useTaskStore();
  const [timelineData, setTimelineData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [defaultTimeStart, setDefaultTimeStart] = useState(null);
  const [defaultTimeEnd, setDefaultTimeEnd] = useState(null);

  useEffect(() => {
    // Define all possible assignees
    const allAssignees = [
      { value: "Alice", label: "Alice" },
      { value: "Bob", label: "Bob" },
      { value: "Charlie", label: "Charlie" },
      { value: "David", label: "David" },
    ];

    // Create groups for the timeline
    const newGroups = allAssignees.map((assignee, index) => ({
      id: index + 1,
      title: assignee.label,
    }));

    // Create timeline items
    const newTimelineData = [];
    newGroups.forEach((group) => {
      tasks.forEach((task) => {
        if (task.assignees.some((assignee) => assignee.label === group.title)) {
          newTimelineData.push({
            id: `${task.id}-${group.id}`, // Ensure unique ID for each task-assignee combination
            group: group.id,
            title: task.title,
            start_time: moment(task.start),
            end_time: moment(task.end),
            className: categoryClasses[task.category], // Add custom class based on category
          });
        }
      });
    });

    setGroups(newGroups);
    setTimelineData(newTimelineData);

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
        groups={groups}
        items={timelineData}
        defaultTimeStart={defaultTimeStart}
        defaultTimeEnd={defaultTimeEnd}
      />
    </div>
  );
};

export default TimelineDashboard;