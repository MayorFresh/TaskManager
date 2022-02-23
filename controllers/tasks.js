const Task = require('../model/task');

// getting all task route
const getAllTasks = async (req, res) => {
   try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
   }
   catch (err) {
        res.status(500).json({msg: err})
   }
}

// Creating a new task route
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    }
    catch (err) {
        res.status(500).json({msg: err})
        console.log("Error in saving task...")
    }
    
}

// getting a single task route
const getSingleTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOne({_id:taskID});
        // a condition to check if the id is valid or not
        if(!task){
            return res.status(404).json({msg: "No Task with id: " + taskID});
        }

        res.status(200).json({task})
    }
    catch (err) {
        res.status(500).json({msg: err})
    }
}


// delete a single task route
const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
        // a condition to check if the id is valid or not
        if(!task){
            return res.status(404).json({msg: "No Task with id: " + taskID});
        }
        res.status(200).json({msg: 'task deleted'})
    }
    catch (err) {
        res.status(500).json({msg: err})
    }
    
}


// update a single task route
const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params

        const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
            new: true, 
            runValidators: true
        })
         // a condition to check if the id is valid or not
         if(!task){
            return res.status(404).json({msg: "No Task with id: " + taskID});
        }
        res.status(200).json({task})
    }
    catch (err) {
        res.status(500).json({msg: err})
    }
 
}

module.exports = {
    getAllTasks, 
    createTask, 
    getSingleTask, 
    deleteTask, 
    updateTask
}