const express = require('express');
const router = express.Router();

const TasksController = require('../controllers/TasksController');

// create task
// api/tasks
router.post('/', TasksController.createTask);

// get all tasks
// api/tasks
router.get('/', TasksController.getTasks);

// update task
// api/tasks
router.put('/:id', TasksController.updateTask);

// delete task
// api/tasks
router.delete('/:id', TasksController.deleteTask
);

module.exports = router;