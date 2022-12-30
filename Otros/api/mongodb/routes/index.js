const express = require('express');
const usersRoutes = require('./users');
const rolesRoutes = require('./roles');
const tasksRoutes = require('./tasks');

const apiRoutes = express.Router();

apiRoutes.use('/users', usersRoutes);
apiRoutes.use('/roles', rolesRoutes);
apiRoutes.use('/tasks', tasksRoutes);

module.exports = apiRoutes;