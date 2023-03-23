const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:'); // Example for sqlite

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
