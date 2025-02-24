import express from 'express';
const router = express.Router();
import { getCategories, createCategory, deleteCategory } from '../controllers/categoryController.js';

router.route('/').get(getCategories).post(createCategory);
router.route('/:id').delete(deleteCategory);

export default router;