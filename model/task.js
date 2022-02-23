const mongoose = require('mongoose');

// Schema for tahe task manager
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must provide a name"],
        trim: true,
        maxlength: [30, 'name must not exceed 30 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});



/* Task below is what is used to access the Task Schema model
from the controller 
*/
module.exports = mongoose.model('Task', TaskSchema)