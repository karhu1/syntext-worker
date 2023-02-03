const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wave')
    .setDescription('waving my hand'),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true
    });

    const newMessage = `Wave at <@${interaction.user.id}>`;
    console.log(interaction)
    console.log(message)
    await interaction.editReply({
      content: newMessage
    });
  }
}