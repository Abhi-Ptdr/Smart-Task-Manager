"use client";

import React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

const TaskList = ({ category, tasks, onEditTask }) => {
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
                  <TaskItem task={task} provided={provided} onEditTask={onEditTask} />
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