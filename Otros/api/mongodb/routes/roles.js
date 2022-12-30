const express = require('express');
const roleModel = require('../schemas/roles');

const roleRoutes = express.Router();

roleRoutes.get('/', (req, res) => {
    roleModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

roleRoutes.get('/:id', (req, res) => {
    roleModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

roleRoutes.post('/create', (req, res) => {
    const user = new roleModel(req.body);

    user.save().then((document) => {
        res.json({ status: 200, data: document });
    }).catch((error) => {
        res.json({ status: 500, data: error });
    });
});

roleRoutes.put('/:id', (req, res) => {
    roleModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

roleRoutes.delete('/:id', (req, res) => {
    roleModel.findOneAndDelete({ _id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

module.exports = roleRoutes;