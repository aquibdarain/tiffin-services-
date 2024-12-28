const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('tiffin_service_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// Import models
const User = require('./User')(sequelize, DataTypes);
const TiffinRecord = require('./tiffinRecord')(sequelize, DataTypes);
const Billing = require('./billing')(sequelize, DataTypes);

// Define associations
User.hasMany(TiffinRecord, { foreignKey: 'userId' });
User.hasMany(Billing, { foreignKey: 'userId' });

// Export models
module.exports = { User, TiffinRecord, Billing, sequelize };
