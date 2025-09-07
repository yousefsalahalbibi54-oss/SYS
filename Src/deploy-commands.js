// 📌 deploy-commands.js
const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const commands = [
  new SlashCommandBuilder()
    .setName("ping")
    .setDescription("🏓 يرد عليك Pong!"),

  new SlashCommandBuilder()
    .setName("rules")
    .setDescription("📜 يعرض قوانين السيرفر"),

  new SlashCommandBuilder()
    .setName("apply")
    .setDescription("📝 يشرح طريقة التقديم"),

  new SlashCommandBuilder()
    .setName("ticket")
    .setDescription("🎟 يفتح تذكرة للتواصل مع الإدارة"),
].map(cmd => cmd.toJSON());

// 🔹 أنشئ REST client
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

// 🔹 تسجيل الأوامر
(async () => {
  try {
    console.log("⏳ جاري رفع الأوامر إلى Discord...");

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID, // ID البوت
        process.env.GUILD_ID   // ID السيرفر
      ),
      { body: commands }
    );

    console.log("✅ تم رفع الأوامر بنجاح!");
  } catch (error) {
    console.error("❌ خطأ أثناء رفع الأوامر:", error);
  }
})();
