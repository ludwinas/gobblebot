const { SlashCommandBuilder } = require('discord.js');
const { Prompt } = require('../model');

module.exports = {
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

        try {
            const newPrompt = await Prompt.create({
                user_id: interaction.user.id,
                server_id: interaction.guildId,
                content: input});
            await interaction.reply("Gobbled the following prompt: " + newPrompt.content);

        } catch (error) {
            await interaction.reply('Oh no! Something went wrong with gobbling the prompt.');
        }
    },
};
