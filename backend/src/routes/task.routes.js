const express = require('express');
const router = express.Router();

const { createTask, getAllTasks, updateTask, deleteTask } = require('../controllers/task.controllers');
const auth= require("../middleware/auth.middleware")

// Create a new task
router.post('/', auth, createTask);
// Get all tasks
router.get('/', auth, getAllTasks);
// Update a task
router.put('/:id', auth, updateTask);
// Delete a task
router.delete('/:id', auth, deleteTask);
module.exports = router;