const { DataTypes } = require('sequelize');
const { dbRepairs } = require('../database/repairs.config');

const Repair = dbRepairs.define('repairs', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pending',
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Repair;
