import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> ❮💝❯➤ 𝐏𝐎𝐑 𝐅𝐀𝐕𝐎𝐑 𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 𝐃𝐄 𝐄𝐒𝐓𝐀 𝐅𝐎𝐑𝐌𝐀, 𝐏𝐎𝐑 𝐄𝐉𝐄𝐌𝐏𝐋𝐎: ${usedPrefix + command} \`Minecraft\``;
  //if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP')|| m.text.includes('Rule34')) return m.reply('[❗𝐈𝐍𝐅𝐎❗] 𝙽𝙾 𝙿𝚄𝙴𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙽𝚃𝙴𝙽𝙸𝙴𝙽𝙳𝙾 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾\n𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 !enable modohorny');
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  conn.sendFile(m.chat, link, 'error.jpg', `*╭•• <<─◊─◊─◊─≪•◦❲💝❳◦•≫─◊─◊─◊─>> ••╮*\n*╟➤ ✅ 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎/𝐄𝐍𝐂𝐎𝐍𝐓𝐑𝐀𝐃𝐎 ✅*\n*╰•• <<─◊─◊─◊─≪•◦╌╌╌◦•≫─◊─◊─◊─>> ••╯*\n\n❮😍❯➤ 𝙏𝙪 𝙩𝙚𝙭𝙩𝙤 𝙖 𝙗𝙪𝙨𝙘𝙖𝙧:\n➤ ${text}\n\n❮⬇️❯➤ 𝙀𝙣𝙡𝙖𝙘𝙚/𝙐𝙍𝙇:\n➤ ${link}\n\n❮🍀❯➤ 𝘽𝙪𝙨𝙘𝙖𝙙𝙤𝙧:\n➤ *Google*\n\n❮💦❯➤ 𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩\n${global.wm}`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['internet', 'tools'];
handler.command = /^(gimage|image|imagen)$/i;
handler.register = true
export default handler;
