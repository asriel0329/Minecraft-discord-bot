const { SlashCommandBuilder, MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check whether the bot is responsive"),

  async execute(interaction) {
    await interaction.reply({
      content: "It's working!",
      flags: MessageFlags.Ephemeral
    });
  }
};
