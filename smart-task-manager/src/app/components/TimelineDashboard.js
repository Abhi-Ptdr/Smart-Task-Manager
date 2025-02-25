"use client";

import React, { useEffect, useState } from "react";
import Timeline from "react-calendar-timeline";
import moment from "moment";

const categoryClasses = {
  "General Information": "category-general",
  "Backlog": "category-backlog",
  "In Progress": "category-in-progress",
  "Paused": "category-paused",
  "Ready For Launch": "category-ready-for-launch",
};

const TimelineDashboard = ({ tasks = [], view }) => {
  const [timelineData, setTimelineData] = useState([]);
  const [groups, setGroups] = useState([]);
  const [visibleTimeStart, setVisibleTimeStart] = useState(moment().startOf('day').valueOf());
  const [visibleTimeEnd, setVisibleTimeEnd] = useState(moment().endOf('day').valueOf());

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
        if (task.assignees && task.assignees.some((assignee) => assignee === group.title)) {
          newTimelineData.push({
            id: `${task._id}-${group.id}`, // Ensure unique ID for each task-assignee combination
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

    // Set visible time range based on the selected view
    switch (view) {
      case "year":
        setVisibleTimeStart(moment().startOf("year").valueOf());
        setVisibleTimeEnd(moment().endOf("year").valueOf());
        break;
      case "month":
        setVisibleTimeStart(moment().startOf("month").valueOf());
        setVisibleTimeEnd(moment().endOf("month").valueOf());
        break;
      case "day":
        setVisibleTimeStart(moment().startOf("day").valueOf());
        setVisibleTimeEnd(moment().endOf("day").valueOf());
        break;
      case "hour":
        setVisibleTimeStart(moment().startOf("hour").valueOf());
        setVisibleTimeEnd(moment().endOf("hour").valueOf());
        break;
      default:
        setVisibleTimeStart(moment().add(-12, "hour").valueOf());
        setVisibleTimeEnd(moment().add(12, "hour").valueOf());
        break;
    }
  }, [tasks, view]);

  const handleTimeChange = (visibleTimeStart, visibleTimeEnd, updateScrollCanvas) => {
    setVisibleTimeStart(visibleTimeStart);
    setVisibleTimeEnd(visibleTimeEnd);
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  };

  const handleTimeInit = (visibleTimeStart, visibleTimeEnd) => {
    setVisibleTimeStart(visibleTimeStart);
    setVisibleTimeEnd(visibleTimeEnd);
  };

  return (
    <div className="mt-6">
      <Timeline
        groups={groups}
        items={timelineData}
        visibleTimeStart={visibleTimeStart}
        visibleTimeEnd={visibleTimeEnd}
        onTimeChange={handleTimeChange}
        onTimeInit={handleTimeInit}
      />
    </div>
  );
};

export default TimelineDashboard;