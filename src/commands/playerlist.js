const { SlashCommandBuilder } = require("discord.js");
const api = require("../services/paperApi");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("playerlist")
    .setDescription("List players currently online"),

  async execute(interaction) {
    await interaction.deferReply();

    const data = await api.getPlayers();
    const players = data.players
      ? data.players.split(",").filter(p => p.length > 0)
      : [];

    if (!players.length) {
      return interaction.editReply("目前沒有玩家在線");
    }

    await interaction.editReply(
      "目前在線玩家：\n" +
      players.map(p => `- ${p}`).join("\n")
    );
  }
};
