import axiosInstance from './axios';

const getCategories = async () => {
  const response = await axiosInstance.get('/categories');
  return response.data;
};

const createCategory = async (category) => {
  const response = await axiosInstance.post('/categories', category);
  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axiosInstance.delete(`/categories/${id}`);
  return response.data;
};

export { getCategories, createCategory, deleteCategory };