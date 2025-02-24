"use client";

import React, { useState, useEffect } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useRouter } from "next/navigation";
import CategoryCard from "../components/CategoryCard";
import TaskModal from "../components/TaskModal";
import AddCategoryCard from "../components/AddCategoryCard";
import AddCategoryModal from "../components/AddCategoryModal";
import { getTasks, createTask, updateTask, deleteTask } from "../api/taskService";
import { getCategories, createCategory, deleteCategory } from "../api/categoryService";
import Buttons from "../components/Buttons";
import Dock from "../components/Dock";
import Footer from "../components/Footer";

const TaskManagerPage = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAddCategoryModalOpen, setAddCategoryModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTasks();
      setTasks(tasksData);

      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };

    fetchData();
  }, []);

  const openModal = (category) => {
    setCurrentCategory(category);
    setEditingTask(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditingTask(null);
    setCurrentCategory("");
  };

  const handleAddTask = async (task) => {
    console.log("handleAddTask called with task:", task);
    if (editingTask) {
      const updatedTask = await updateTask(editingTask._id, { ...task, category: currentCategory });
      setTasks(tasks.map((t) => (t._id === updatedTask._id ? updatedTask : t)));
    } else {
      const newTask = await createTask({ ...task, category: currentCategory });
      setTasks([...tasks, newTask]);
    }
    closeModal();
  };

  const handleDeleteTask = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleAddCategory = async (newCategory) => {
    const createdCategory = await createCategory({ name: newCategory });
    setCategories([...categories, createdCategory]);
  };

  const handleDeleteCategory = async (id) => {
    await deleteCategory(id);
    setCategories(categories.filter((category) => category._id !== id));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      // Handle reordering logic here if needed
    } else {
      const taskId = result.draggableId;
      updateTask(taskId, { category: destination.droppableId });
      setTasks(tasks.map((task) => (task._id === taskId ? { ...task, category: destination.droppableId } : task)));
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="p-4">
        <div className="flex justify-between mt-2">
          <div className="flex items-center justify-center space-x-2">
            <img className="logo" src="/TaskLogo.png" alt="Task Logo" />
            <h1 className="text-2xl font-bold">Task Manager</h1>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Dock />      
            <Buttons  />
          </div>
        </div>
        <hr className="mb-10 mt-3"/>
        <div className="heading">
          <h1 className="text-2xl font-bold text-center">Manage Your Tasks</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category._id}
              title={category.name}
              category={category.name}
              tasks={tasks.filter((task) => task.category === category.name)}
              onAddTask={() => openModal(category.name)}
              onEditTask={(task) => {
                setEditingTask(task);
                setCurrentCategory(category.name);
                setModalOpen(true);
              }}
              onDeleteTask={handleDeleteTask}
            />
          ))}
          <AddCategoryCard onAddCategory={() => setAddCategoryModalOpen(true)} />
        </div>
        {isModalOpen && (
          <TaskModal
            isEditing={!!editingTask}
            taskToEdit={editingTask}
            onClose={closeModal}
            category={currentCategory}
            onSave={handleAddTask}
          />
        )}
        {isAddCategoryModalOpen && (
          <AddCategoryModal
            isOpen={isAddCategoryModalOpen}
            onClose={() => setAddCategoryModalOpen(false)}
            onAddCategory={handleAddCategory}
          />
        )}
      </div>
      <Footer />
    </DragDropContext>
  );
};

export default TaskManagerPage;