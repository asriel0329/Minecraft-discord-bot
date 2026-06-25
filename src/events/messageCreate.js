const api = require("../services/paperApi");

module.exports = (client) => {
  client.on("messageCreate", async (message) => {
    if (message.author.bot) return;

    // Discord → Minecraft chat
    if (message.channel.name === "chatlog") {
      try {
        await api.sendDiscordChat(message.author.username, message.content);
      } catch (err) {
        console.error("Failed to forward Discord chat to Minecraft:", err.message);
      }
    }
  });
};
