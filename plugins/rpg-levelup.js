import {canLevelUp, xpRange} from '../lib/levelling.js';
import {levelup} from '../lib/canvas.js';

const handler = async (m, {conn}) => {
  const name = conn.getName(m.sender);
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const {min, xp, max} = xpRange(user.level, global.multiplier);
    throw `╭✿ ╌╌╌╌╌╌╌╌┤❨💞❩├╌╌╌╌╌╌╌╌ ✿╮
╎ 👑 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 👑
├┄┄┄┄┄┄┄┄┄┄┄ • • •
╎*😍 ¡Bienvenido/a Usuario/a!*
╎ ${user}
├┄┄┄┄┄┄┄┄┄┄┄ • • •
*╎𝚃𝚄 𝙽𝙸𝚅𝙴𝙻 𝙰𝙲𝚃𝚄𝙰𝙻 𝙴𝚂:*
⋆⁺˖⸙̭➢ ${user.level}
├┄┄┄┄┄┄┄┄┄┄┄ • • •
*╎𝚃𝚄 𝙴𝚇𝙿𝙴𝚁𝙸𝙴𝙽𝙲𝙸𝙰:*
╎⋆⁺˖⸙̭➢ ${user.exp - min}/${xp}
├┄┄┄┄┄┄┄┄┄┄┄ • • •
╎💖 𝙼 𝙸 𝚃 𝚂 𝚄 𝚁 𝙸 - 𝙱 𝙾 𝚃 - 𝙼 𝙳 💖
╰✿ ╌╌╌╌╌╌╌╌┤❨💞❩├╌╌╌╌╌╌╌╌ ✿╯

*⋆⁺˖⸙̭➢ Para subir de nivel, te faltan: ${max - user.exp} de experiencia más. mientras mas juegas a los juegos rpgs podras subir mas de nivel..*`.trim();
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const teks = `Bien hecho ${conn.getName(m.sender)} Nivel:`;
    const str = `╭✿ ╌╌╌╌╌╌╌╌┤❨💜❩├╌╌╌╌╌╌╌╌ ✿╮
*╎ 😍 𝗡𝗨𝗘𝗩𝗢 𝗡𝗜𝗩𝗘𝗟 𝗗𝗘𝗟 𝗨𝗦𝗨𝗔𝗥𝗜𝗢/𝗔 😍*
├┄┄┄┄┄┄┄┄┄┄┄ • • •
╎💎 𝙽𝙸𝚅𝙴𝙻 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁:*
╎ ${before}
├┄┄┄┄┄┄┄┄┄┄┄ • • •
*╎💜 𝙽𝚄𝙴𝚅𝙾 𝙽𝙸𝚅𝙴𝙻:*
╎ ${user.level}
╰✿ ╌╌╌╌╌╌╌╌┤❨💜❩├╌╌╌╌╌╌╌╌ ✿╯

*😍 𝗣𝘂𝗲𝗱𝗲𝘀 𝗷𝘂𝗴𝗮𝗿 𝗺𝗮𝘀 𝗷𝘂𝗲𝗴𝗼𝘀 𝗿𝗽𝗴𝘀 𝗽𝗮𝗿𝗮 𝗴𝗮𝗻𝗮𝗿 𝗺𝗮𝘀 𝗲𝘅𝗽 𝘆 𝘀𝘂𝗯𝗶𝗿 𝗱𝗲 𝗻𝗶𝘃𝗲𝗹.
`.trim();
    try {
      const img = await levelup(teks, user.level);
      conn.sendFile(m.chat, img, 'levelup.jpg', str, m);
    } catch (e) {
      m.reply(str);
    }
  }
};

handler.help = ['levelup'];
handler.tags = ['xp'];

handler.command = ['nivel', 'lvl', 'levelup', 'level'];

handler.register = true
export default handler;