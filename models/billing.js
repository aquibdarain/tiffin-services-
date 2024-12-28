// models/Billing.js
module.exports = (sequelize, DataTypes) => {
    const Billing = sequelize.define('Billing', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2), // To store total amount
            allowNull: false
        },
        billingPeriodStart: {
            type: DataTypes.DATEONLY, // Use DATEONLY for just date
            allowNull: false
        },
        billingPeriodEnd: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });

    return Billing;
};
