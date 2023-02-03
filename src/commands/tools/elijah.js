const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('elijah')
    .setDescription('is a bozo'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `elijah is a bozo`;
    await interaction.editReply({
      content: newMessage
    });
  }
}