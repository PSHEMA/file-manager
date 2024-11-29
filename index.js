const app = require('./app');
const sequelize = require('./src/models');
const User  = require('./src/models/User');
const File = require('./src/models/File');

const PORT = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ alter: true });
        console.log('Database Tables have been synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})();
