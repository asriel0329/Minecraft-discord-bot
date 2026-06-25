const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Check whether the bot is responsive"),

  async execute(interaction) {
    await interaction.reply("It's working!");
  }
};
