// 📌 index.js
const express = require("express");
const { Client, GatewayIntentBits, Events } = require("discord.js");
require("dotenv").config();

// 🔹 Express server (يبقي Glitch شغال)
const app = express();
app.get("/", (req, res) => {
  res.send("✅ Bot is running...");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(🌐 Server running on port ${PORT});
});

// 🔹 Discord bot client
const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once(Events.ClientReady, () => {
  console.log(🤖 Logged in as ${client.user.tag});
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("🏓 Pong!");
  }

  if (interaction.commandName === "rules") {
    await interaction.reply("📜 قوانين السيرفر:\n1. الاحترام متبادل\n2. ممنوع السبام\n3. ممنوع الغش\n4. التزام RP كامل ✅");
  }

  if (interaction.commandName === "apply") {
    await interaction.reply("📝 لتقديم طلب، تواصل مع الإدارة عبر التذاكر أو استعمل /ticket.");
  }

  if (interaction.commandName === "ticket") {
    await interaction.reply("🎟 تم فتح تذكرة! الرجاء الانتظار ليتواصل معك أحد المشرفين.");
  }
});

// 🔹 تسجيل الدخول
client.login(process.env.TOKEN);
