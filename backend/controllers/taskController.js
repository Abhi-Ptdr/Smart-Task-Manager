import Task from '../models/taskModel.js';

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Public
const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
};

// @desc    Create a task
// @route   POST /api/tasks
// @access  Public
const createTask = async (req, res) => {
  const { title, start, end, assignees, category } = req.body;

  const task = new Task({
    title,
    start,
    end,
    assignees,
    category,
  });

  const createdTask = await task.save();
  res.status(201).json(createdTask);
};

// @desc    Update a task
// @route   PUT /api/tasks/:id
// @access  Public
const updateTask = async (req, res) => {
  const { title, start, end, assignees, category } = req.body;

  const task = await Task.findById(req.params.id);

  if (task) {
    task.title = title;
    task.start = start;
    task.end = end;
    task.assignees = assignees;
    task.category = category;

    const updatedTask = await task.save();
    res.json(updatedTask);
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
};

// @desc    Delete a task
// @route   DELETE /api/tasks/:id
// @access  Public
const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await Task.deleteOne({ _id: req.params.id });
    res.json({ message: 'Task removed' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
};

export { getTasks, createTask, updateTask, deleteTask };