const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "user"
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true // ✅ Fix: Allow NULL values
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true // ✅ Fix: Allow NULL values
    }
}, {
    timestamps: true
});

module.exports = User;
