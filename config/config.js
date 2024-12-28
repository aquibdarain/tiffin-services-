const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('tiffin_service_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
