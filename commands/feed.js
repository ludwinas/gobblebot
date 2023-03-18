const { SlashCommandBuilder } = require('discord.js');

let db = [];

module.exports = {
    db: db,
    data: new SlashCommandBuilder()
	.setName('feed')
	.setDescription('Feeds gobblebot a prompt')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('Type here the prompt to feed to gobblebot')
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        db.push(input);
	await interaction.reply("Gobbled the following prompt: " + input);
        console.log(db);
    },
};
