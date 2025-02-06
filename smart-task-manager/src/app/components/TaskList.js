"use client";

import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTaskStore } from "../store/taskStore";
import TaskItem from "./TaskItem";

const TaskList = ({ category }) => {
  const { tasks } = useTaskStore();

  // Ensure we filter tasks correctly per category
  const filteredTasks = tasks.filter((task) => task.category === category);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    // Handle task reordering logic here (if needed)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
    </DragDropContext>
  );
};

export default TaskList;