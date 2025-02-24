import axiosInstance from './axios';

const getTasks = async () => {
  const response = await axiosInstance.get('/tasks');
  return response.data;
};

const createTask = async (task) => {
  const response = await axiosInstance.post('/tasks', task);
  return response.data;
};

const updateTask = async (id, task) => {
  const response = await axiosInstance.put(`/tasks/${id}`, task);
  return response.data;
};

const deleteTask = async (id) => {
  const response = await axiosInstance.delete(`/tasks/${id}`);
  return response.data;
};

export { getTasks, createTask, updateTask, deleteTask };