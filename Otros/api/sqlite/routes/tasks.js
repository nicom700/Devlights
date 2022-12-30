const express = require('express');
const taskModel = require('../models/tasks');

const taskRoutes = express.Router();

taskRoutes.get('/', async (req, res) => {
    const data = await taskModel.findAll();

    res.json({ status: 200, data: data });
});

taskRoutes.get('/:id', async (req, res) => {
    const data = await taskModel.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json({ status: 200, data });
});

taskRoutes.post('/create', async (req, res) => {
    const data = await taskModel.create(req.body);

    res.json({ status: 200, data });
});

taskRoutes.put('/:id', async (req, res) => {
    const data = await taskModel.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.json({ status: 200, data });
});

taskRoutes.delete('/:id', async (req, res) => {
    const data = await taskModel.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({ status: 200, data });
});

module.exports = taskRoutes;