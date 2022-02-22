const express = require('express');
const router = express.Router();

const {getAllTasks, createTask, deleteTask, updateTask, getSingleTask} = require('../controllers/tasks');

// get all tasks
router.route('/').get(getAllTasks).post(createTask);

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);



module.exports = router;