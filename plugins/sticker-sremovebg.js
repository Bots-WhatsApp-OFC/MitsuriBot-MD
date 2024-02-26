import uploadImage from '../lib/uploadImage.js';
import {sticker} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || '';
    const img = await q.download();
    const url = await uploadImage(img);
    const sremovebg = global.API(`https://api.lolhuman.xyz/api/removebg?apikey=${lolkeysapi}&img=${url}`);
    const stickerr = await sticker(false, sremovebg, global.packname, global.author);
    conn.sendFile(m.chat, stickerr, 'sticker.webp', '', m, {asSticker: true});
  } catch (e) {
    m.reply('> ⚠️ 𝙀𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙨𝙚𝙧𝙖 𝙘𝙤𝙣𝙫𝙚𝙧𝙩𝙞𝙙𝙤 𝙚𝙣 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙨𝙞𝙣 𝙛𝙤𝙣𝙙𝙤.');
  }
};
handler.command = /^sremovebg|removebg$/i;
export default handler;
