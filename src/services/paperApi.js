const axios = require("axios");

const client = axios.create({
  baseURL: process.env.PAPER_API,
  timeout: 5000,
});

async function getPlayers() {
  const res = await client.get("/players");
  return res.data;
}

async function getPlayer(name) {
  const res = await client.get(`/player/${name}`);
  return res.data;
}

async function sendDiscordChat(user, message) {
  await client.post("/discord-chat", {
    user,
    message
  });
}

module.exports = {
  getPlayers,
  getPlayer,
  sendDiscordChat
};