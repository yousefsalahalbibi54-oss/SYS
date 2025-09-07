const { REST, Routes, SlashCommandBuilder } = require("discord.js");
require("dotenv").config();

const commands = [
  new SlashCommandBuilder().setName("ping").setDescription("🏓 اختبار استجابة البوت"),
  new SlashCommandBuilder().setName("rules").setDescription("📜 عرض قوانين السيرفر"),
  new SlashCommandBuilder().setName("apply").setDescription("📝 تقديم طلب للانضمام"),
  new SlashCommandBuilder().setName("ticket").setDescription("🎟️ فتح تذكرة دعم")
].map(cmd => cmd.toJSON());

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log("🚀 جاري تسجيل الأوامر ...");

    await rest.put(
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      { body: commands }
    );

    console.log("✅ تم تسجيل الأوامر بنجاح!");
  } catch (error) {
    console.error(error);
  }
})();
