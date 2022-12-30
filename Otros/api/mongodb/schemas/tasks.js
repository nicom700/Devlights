const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    description: String,
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;