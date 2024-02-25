const handler = async (m, {command, text}) => m.reply(`
╭╌╍╍╍═══❲ 💜 ❳═══╍╍╍╌╮
║ *💞 Preguntas - Bot  💞*
╟╌╌╌╌╌╌╌╌╌╌╌ • •
║ *🍀 Tu pregunta:*
║ ${text}
╟╌╌╌╌╌╌╌╌╌╌╌ • •
║ *💜 Respuesta de la pregunta:*
║ ${['Si', 'Tal vez sí', 'Posiblemente', 'Probablemente no', 'No', 'Imposible'].getRandom()}
║
║ 🎀 Mitsuri - Bot - MD 🎀
╰╌╍╍╍═══❲ 💜 ❳═══╍╍╍╌╯
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid,
} : {});
handler.help = ['pregunta <texto>?'];
handler.tags = ['kerang'];
handler.command = /^pregunta|preguntas|apakah$/i;
export default handler;
