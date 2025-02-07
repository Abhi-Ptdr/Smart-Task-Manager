"use client";

import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

const TaskList = ({ category }) => {
  const { tasks } = useTaskStore();

  // Ensure we filter tasks correctly per category
  const filteredTasks = tasks.filter((task) => task.category === category);

  return (
    <Droppable droppableId={category}>
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {filteredTasks.map((task, index) => (
            <Draggable key={task.id} draggableId={task.id} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TaskItem task={task} provided={provided} />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default TaskList;