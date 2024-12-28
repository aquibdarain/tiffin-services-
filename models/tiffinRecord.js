// models/TiffinRecord.js
module.exports = (sequelize, DataTypes) => {
    const TiffinRecord = sequelize.define('TiffinRecord', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY, // Adjusting to only accept date
            allowNull: false
        },
        vegCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0 // Default to 0 if not provided
        },
        nonVegCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0 // Default to 0 if not provided
        }
    });

    return TiffinRecord;
};
