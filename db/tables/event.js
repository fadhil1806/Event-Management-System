const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const event = sequelize.define('event', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    guru_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },
    event_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    max_participant: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "event",
    freezeTableName: false
});

module.exports = event