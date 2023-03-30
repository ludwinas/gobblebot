const { Sequelize } = require('sequelize');

require('dotenv').config();
const storagePath = (process.env.DEV ? 'database.sqlite' : '/data/database.sqlite');

const sequelize = new Sequelize('database', 'user', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: storagePath,
});

const Prompt = sequelize.define('prompt', {
    user_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    server_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    global: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = {
    sequelize: sequelize,
    Prompt: Prompt
};
