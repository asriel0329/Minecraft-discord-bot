const { SlashCommandBuilder } = require("discord.js");
const api = require("../services/paperApi");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("where")
    .setDescription("Show a player's current location")
    .addStringOption(option =>
      option
        .setName("player")
        .setDescription("The player name to look up")
        .setRequired(true)
    ),

  async execute(interaction) {
    const name = interaction.options.getString("player");

    await interaction.deferReply();

    try {
      const data = await api.getPlayer(name);

      await interaction.editReply(
        `📍 ${data.name}\n` +
        `World: ${data.world}\n` +
        `X: ${data.x}\nY: ${data.y}\nZ: ${data.z}`
      );
    } catch (err) {
      await interaction.editReply("找不到該玩家");
    }
  }
};
