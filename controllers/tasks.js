const getAllTasks = (req, res) => {
    res.send('get all task')
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getSingleTask = (req, res) => {
    res.json({id: req.params.id})
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

module.exports = {
    getAllTasks, 
    createTask, 
    getSingleTask, 
    deleteTask, 
    updateTask
}