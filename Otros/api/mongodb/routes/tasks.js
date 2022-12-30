const express = require('express');
const taskModel = require('../schemas/tasks');

const taskRoutes = express.Router();

taskRoutes.get('/', (req, res) => {
    taskModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

taskRoutes.get('/:id', (req, res) => {
    taskModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

taskRoutes.post('/create', (req, res) => {
    const user = new taskModel(req.body);

    user.save().then((document) => {
        res.json({ status: 200, data: document });
    }).catch((error) => {
        res.json({ status: 500, data: error });
    });
});

taskRoutes.put('/:id', (req, res) => {
    taskModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

taskRoutes.delete('/:id', (req, res) => {
    taskModel.findOneAndDelete({ _id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

module.exports = taskRoutes;