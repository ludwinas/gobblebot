const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with whatever you said!')
        .addStringOption(option =>
            option
                .setName('input')
                .setDescription('Type here the input to be echoed back')
                .setRequired(true)),
    async execute(interaction) {
        const input = interaction.options.getString('input');
        console.log(input);
	await interaction.reply("You said: " + input);
    },
};
