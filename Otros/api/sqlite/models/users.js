const { DataTypes } = require('sequelize');
const db = require('./index');

const userModel = db.define('Users', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
});

module.exports = userModel;