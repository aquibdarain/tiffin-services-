module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // Add more fields as needed
    });

    return User;
};
