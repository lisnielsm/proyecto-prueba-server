const express = require('express');
const router = express.Router();

const TasksController = require('../controllers/TasksController');
const { check } = require('express-validator');

// create task
// api/tasks
router.post('/',
    [
        check('text', 'The text of the task is required').notEmpty()
    ],
    TasksController.createTask
);

// get all tasks
// api/tasks
router.get('/',
    TasksController.getTasks
);

// update task
// api/tasks
router.put('/:id',
    [
        check('text', 'The text of the task is required').notEmpty()
    ],
    TasksController.updateTask
);

// delete task
// api/tasks
router.delete('/:id',
    TasksController.deleteTask
);

module.exports = router;