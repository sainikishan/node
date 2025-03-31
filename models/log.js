const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Log = sequelize.define("Log", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    action: { type: DataTypes.ENUM("login", "logout"), allowNull: false },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { timestamps: false });

module.exports = Log;
