const { SlashCommandBuilder } = require('discord.js');
const { Prompt } = require('../model');

function shuffle(array) {
    var random = array.map(Math.random);
    return array.sort(function(a, b) {
        return random[a] - random[b];
    });
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('random')
        .setDescription('Spits out a random prompt'),
    async execute(interaction) {
        const prompts = await Prompt.findAll({
            attributes: ["content"],
            where: {server_id: interaction.guildId}
        });
        const db = prompts.map(p => p.content);
        console.log(`Giving out a random prompt from: ${db}`);
        if (db.length > 0) {
            const randomPrompt = db[Math.floor(Math.random() * db.length)];
            await interaction.reply(randomPrompt);
        } else {
            await interaction.reply("Sorry, no can do! my belly is empty. Try feeding me first");
        }
    },
};
