const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const guru = sequelize.define('guru', {
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
})

module.exports = guru;