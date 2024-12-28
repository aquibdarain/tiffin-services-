const { sequelize } = require('./models');

const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
