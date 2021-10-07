const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true
    },
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Task", TaskSchema);