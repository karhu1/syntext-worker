const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('attend')
    .setDescription('You will be attending this upcoming team meeting.'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `${client.displayName} will be attending.`;
    await interaction.editReply({
      content: newMessage
    });
  }
}