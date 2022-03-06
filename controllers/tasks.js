const Task = require('../model/task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

// getting all task route
const getAllTasks = asyncWrapper( async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
    // res.status(200).json({status: 'success', data: {tasks, nbHits: tasks.length}})
})

// Creating a new task route
const createTask = asyncWrapper( async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task}); 
})

// getting a single task route
const getSingleTask = asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOne({_id:taskID});
    // a condition to check if the id is valid or not
    if(!task){
        // const err = new Error( "Not Found");
        // err.status = 404
        return next(createCustomError("No Task with id: " + taskID, 404))
        // return res.status(404).json({msg: "No Task with id: " + taskID});
    }
    res.status(200).json({task})
})


// delete a single task route
const deleteTask = asyncWrapper( async (req, res, next) => {
    const {id: taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID});
    // a condition to check if the id is valid or not
    if(!task){
        return next(createCustomError("No Task with id: " + taskID, 404))
    }
    res.status(200).json({msg: 'task deleted'})
    
})


// update a single task route
const updateTask = asyncWrapper( async (req, res) => {
    const {id: taskID} = req.params

    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true, 
        runValidators: true
    })
        // a condition to check if the id is valid or not
        if(!task){
            return next(createCustomError("No Task with id: " + taskID, 404))
    }
    res.status(200).json({task})
 
})

module.exports = {
    getAllTasks, 
    createTask, 
    getSingleTask, 
    deleteTask, 
    updateTask
}