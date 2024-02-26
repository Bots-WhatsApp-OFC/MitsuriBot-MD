import {addExif} from '../lib/sticker.js';
const handler = async (m, {conn, text}) => {
  if (!m.quoted) throw '> 🌸 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙨𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙧𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙮 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙪𝙩𝙤𝙧.';
  let stiker = false;
  try {
    let [packname, ...author] = text.split('|');
    author = (author || []).join('|');
    const mime = m.quoted.mimetype || '';
    if (!/webp/.test(mime)) throw '> 🌸 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙨𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙧𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙮 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙪𝙩𝙤𝙧.';
    const img = await m.quoted.download();
    if (!img) throw '> 🌸 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧, 𝙡𝙤 𝙘𝙪𝙖𝙡 𝙨𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙧𝙖 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙮 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙖𝙪𝙩𝙤𝙧.';
    stiker = await addExif(img, packname || global.packname, author || global.author);
  } catch (e) {
    console.error(e);
    if (Buffer.isBuffer(e)) stiker = e;
  } finally {
    if (stiker) conn.sendFile(m.chat, stiker, 'wm.webp', '', m, false, {asSticker: true});
    else throw '> ⚠️ 𝘼𝙡𝙜𝙤 𝙨𝙖𝙡𝙞𝙤 𝙢𝙖𝙡, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙖 𝙪𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙪𝙨𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.';
  }
};
handler.help = ['wm <packname>|<author>'];
handler.tags = ['sticker'];
handler.command = /^take|robar|wm$/i;
export default handler;
