const { DataTypes, STRING } = require("sequelize");
const sequelize = require("../config");

const category = sequelize.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'category',
    freezeTableName: true
})

module.exports = category