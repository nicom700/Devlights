const { DataTypes } = require('sequelize');
const db = require('./index');

const taskModel = db.define('Tasks', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
});

module.exports = taskModel;