import Task from '../models/taskModel.js';

const getTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.json(tasks);
};

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

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (task) {
    await task.remove();
    res.json({ message: 'Task removed' });
  } else {
    res.status(404);
    throw new Error('Task not found');
  }
};

export { getTasks, createTask, updateTask, deleteTask };