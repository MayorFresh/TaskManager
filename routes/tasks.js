const express = require('express');
const router = express.Router();
// const Task = require('../model/task')

const {getAllTasks, createTask, deleteTask, updateTask, getSingleTask} = require('../controllers/tasks');

// the api used is /api/v1/tasks 
//Route to get all tasks and create a new task
router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


module.exports = router;