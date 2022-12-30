const { DataTypes } = require('sequelize');
const db = require('./index');

const roleModel = db.define('Roles', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
});

module.exports = roleModel;