const { Events } = require('discord.js');
const { sequelize, Prompt } = require('../model');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        Prompt.sync();
        console.log(`Ready! Logged in as ${client.user.tag}`);
    },
};
