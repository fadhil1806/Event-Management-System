// models/guru.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Guru = sequelize.define('Guru', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
    tableName: 'guru',
    freezeTableName: true
});

module.exports = Guru;
