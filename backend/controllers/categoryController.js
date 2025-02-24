import Category from '../models/categoryModel.js';

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
const getCategories = async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
};

// @desc    Create a category
// @route   POST /api/categories
// @access  Public
const createCategory = async (req, res) => {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  const createdCategory = await category.save();
  res.status(201).json(createdCategory);
};

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Public
const deleteCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await category.deleteOne();
    res.json({ message: 'Category removed' });
  } else {
    res.status(404);
    throw new Error('Category not found');
  }
};

export { getCategories, createCategory, deleteCategory };