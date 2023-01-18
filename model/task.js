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


module.exports = mongoose.model('Task', TaskSchema)