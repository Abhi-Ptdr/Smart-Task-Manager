// import { create } from "zustand";

// export const useTaskStore = create((set) => ({
//   tasks: [], // Initial empty task list
//   addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
//   updateTask: (updatedTask) =>
//     set((state) => ({
//       tasks: state.tasks.map((task) =>
//         task.id === updatedTask.id ? updatedTask : task
//       ),
//     })),
//   deleteTask: (taskId) =>
//     set((state) => ({
//       tasks: state.tasks.filter((task) => task.id !== taskId),
//     })),
// }));

import { create } from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  editTask: (updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      ),
    })),
}));
