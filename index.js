// index.js
const express = require("express");
const { Client, GatewayIntentBits, Events } = require("discord.js");
require("dotenv").config();

// 🌐 Express server (حتى يضل البوت شغال على الاستضافة)
const app = express();
app.get("/", (req, res) => {
  res.send("✅ Bot is running...");
});
app.listen(3000, () => console.log("🌐 Server running on port 3000"));

// 🤖 Discord bot setup
const client = new Client({
  intents: [GatewayIntentBits.Guilds] // تفعيل Intent الأساسي
});

client.once(Events.ClientReady, () => {
  console.log(🤖 Logged in as ${client.user.tag});
});

// أوامر السلاش
client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }
});

client.login(process.env.TOKEN);
