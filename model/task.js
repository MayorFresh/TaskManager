const mongoose = require('mongoose');

// Schema for the task manager
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxlength: [50, 'name must not exceed 50 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});



/* Task below is what is used to access the Task Schema model
from the controller 
*/
module.exports = mongoose.model('Task', TaskSchema)