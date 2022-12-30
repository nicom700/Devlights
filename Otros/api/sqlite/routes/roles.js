const express = require('express');
const roleModel = require('../models/roles');

const roleRoutes = express.Router();

roleRoutes.get('/', async (req, res) => {
    const data = await roleModel.findAll();

    res.json({ status: 200, data: data });
});

roleRoutes.get('/:id', async (req, res) => {
    const data = await roleModel.findOne({
        where: {
            id: req.params.id
        }
    });

    res.json({ status: 200, data });
});

roleRoutes.post('/create', async (req, res) => {
    const data = await roleModel.create(req.body);

    res.json({ status: 200, data });
});

roleRoutes.put('/:id', async (req, res) => {
    const data = await roleModel.update(req.body, {
        where: {
            id: req.params.id
        }
    });

    res.json({ status: 200, data });
});

roleRoutes.delete('/:id', async (req, res) => {
    const data = await roleModel.destroy({
        where: {
            id: req.params.id
        }
    })

    res.json({ status: 200, data });
});

module.exports = roleRoutes;