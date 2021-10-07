const Task = require('../models/Task');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
    
    // check for errors
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // create a new task
        const task = new Task(req.body);

        // save task to db
        await task.save();

        return res.status(201).json({task});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "An error has ocurred" });
    }
}

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "An error has ocurred" });
    }
}

exports.updateTask = async (req, res) => {
    // check for errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // get the text from task
    const { text } = req.body;
    const newTask = {};

    if(text) {
        newTask.text = text;
    }

    try {
        
        // check the id
        let task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json({ msg: "Task not found" });
        }

        // update the task
        task = await Task.findByIdAndUpdate({_id: req.params.id}, { $set: newTask }, { new: true });

        return res.json({task});

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "An error has ocurred" });
    }
}

exports.deleteTask = async (req, res) => {
    try {

        // check the id
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: "Task not found" });
        }

        // update the task
        task = await Task.findOneAndRemove({ _id: req.params.id });

        return res.json({ msg: "Task deleted" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "An error has ocurred" });
    }
}