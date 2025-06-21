import express from 'express';
var router = express.Router();

import { getTasks,getTaskById, createTask, deleteTask, updateTask } from '../database.js';


// get/fetch all tasks
router.get('/', async function (req, res) {
    const tasks = await getTasks();
    res.json(tasks);
});

// get/fetch all tasks
router.get('/:id', async function (req, res) {
    const taskId = req.params.id;
    const task = await getTaskById(taskId);
    if (!task) {
        return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ status: true, message: 'Task fetched successfully', data: task });
});


// create new task
router.post('/', async function (req, res) {
    const { title, description, is_completed } = req.body;
    if (!title || !description || is_completed === undefined) {
        return res.status(400).json({
            status: false,
            message: 'All fields are required'
        });
    }

    try {
        const task = await createTask(title, description, is_completed);
        return res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create task' });
    }
});

// delete single task

router.delete('/:id', async function (req, res) {
    const taskId = req.params.id;
    try {
        const resp = await deleteTask(taskId);

        res.status(200).json(resp);
    } catch (error) {
        res.status(500).json({message: 'Failed to delete task' });
    }
});


// update task
router.put('/:id', async function (req, res) {
    const taskId = req.params.id;
    const { title, description, is_completed } = req.body;
    if (!title || !description || is_completed === undefined) {
        return res.status(400).json({
            status: false,
            message: 'All fields are required'
        });
    }

    const inputData = {
        title,
        description,
        is_completed
    };
    try {
        const task = await updateTask(taskId, inputData);
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update task' });
    }
});






export default router;