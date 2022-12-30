const express = require('express');
const userModel = require('../schemas/users');

const userRoutes = express.Router();

userRoutes.get('/', (req, res) => {
    userModel.find({}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

userRoutes.get('/:id', (req, res) => {
    userModel.find({ _id: req.params.id }, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

userRoutes.post('/create', (req, res) => {
    const user = new userModel(req.body);

    user.save().then((document) => {
        res.json({ status: 200, data: document });
    }).catch((error) => {
        res.json({ status: 500, data: error });
    });
});

userRoutes.put('/:id', (req, res) => {
    userModel.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

userRoutes.delete('/:id', (req, res) => {
    userModel.findOneAndDelete({ _id: req.params.id }, {}, (error, data) => {
        if (error) {
            res.json({ status: 500, data: error });
        }

        res.json({ status: 200, data });
    });
});

module.exports = userRoutes;