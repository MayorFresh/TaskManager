const express = require('express');
const router = express.Router();
// const Task = require('../model/task')

const {getAllTasks, createTask, deleteTask, updateTask, getSingleTask} = require('../controllers/tasks');

// the api used is /api/v1/tasks 
//Route to get all tasks and create a new task


/**
* @swagger
* /api/v1/tasks/getAllTasks:
*   get:
*     summary: get all users
*     description: this endpoint uses get request to retrieve all users
*     responses:
*       200:
*         description: success
*/

/**
* @swagger
* /api/v1/tasks/createTask:
*   post:
*     summary: Create a new user
*     description: this endpoint is to create a new user
*     responses:
*       201:
*         description: created successfully
*       403:
*         description: unauthorised
*     parameters:
*       - name: name
*         in: body
*         required: true
*         type: string
*         description: name of task
*       - name: completed
*         type: boolean
*         description: done
*/



router.route('/getAllTasks').get(getAllTasks)
router.route('/createTask').post(createTask);

router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


module.exports = router;