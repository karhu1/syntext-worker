const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wave')
    .setDescription('waving my hand'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `Wave at ${message.author.username}`;
    await interaction.editReply({
      content: newMessage
    });
  }
}