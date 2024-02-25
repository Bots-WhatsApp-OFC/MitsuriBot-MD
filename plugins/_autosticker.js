import {sticker} from '../lib/sticker.js';

const handler = (m) => m;

handler.all = async function(m) {
  const chat = db.data.chats[m.chat];
  const user = db.data.users[m.sender];

  if (chat.autosticker && m.isGroup) {
    const q = m;
    let stiker = false;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/webp/g.test(mime)) return;
    if (/image/g.test(mime)) {
      const img = await q.download?.();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (/video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 8) return await m.reply(`> *𖥨ํ∘̥⃟⸽⃟💞➤ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼 𝗻𝗼 𝗱𝗲𝗯𝗲 𝗱𝗲 𝗱𝘂𝗿𝗮𝗿 𝗺𝗮𝘀 𝗱𝗲 7 𝘀𝗲𝗴𝘂𝗻𝗱𝗼𝘀, 𝗽𝗮𝗿𝗮 𝗿𝗲𝗮𝗹𝗶𝘇𝗮𝗿 𝘂𝗻 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗼 𝗲𝗻 𝗺𝗮𝗻𝗱𝗮𝗿 𝘃𝗶𝗱𝗲𝗼𝘀, 𝘁𝗶𝗲𝗻𝗲 𝗾𝘂𝗲 𝗰𝗼𝗿𝘁𝗮𝗿 𝗲𝗹 𝘃𝗶𝗱𝗲𝗼 𝗮 7 𝘀𝗲𝗴𝘂𝗻𝗱𝗼𝘀.\n\n> 𖥨ํ∘̥⃟⸽⃟💞➤ 𝗣𝗮𝗿𝗮 𝗱𝗲𝘀𝗮𝗰𝘁𝗶𝘃𝗮𝗿 𝗲𝘀𝘁𝗮 𝗼𝗽𝗰𝗶𝗼𝗻, 𝗲𝘀𝗰𝗿𝗶𝗯𝗮 𝗲𝗹 𝗰𝗼𝗺𝗮𝗻𝗱𝗼: (#𝚍𝚒𝚜𝚊𝚋𝚕𝚎 𝚊𝚞𝚝𝚘𝚜𝚝𝚒𝚌𝚔𝚎𝚛) 𝘆 𝗮𝘀𝗶 𝘆𝗮 𝗻𝗼 𝗵𝗮𝗿𝗮 𝘀𝘁𝗶𝗰𝗸𝗲𝗿𝘀 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗼𝘀.`);
      // await this.sendButton(m.chat, '*🐱 𝑯𝒆𝒚 𝑬𝒍 𝑽𝒊𝒅𝒆𝒐 𝑵𝒐 𝑷𝒖𝒆𝒅𝒆 𝑫𝒖𝒓𝒂𝒓 𝑴𝒂𝒅 𝑫𝒆 7 𝑺𝒆𝒈𝒖𝒏𝒅𝒐𝒔*', wm, [['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁', '/disable autosticker']], m)
      const img = await q.download();
      if (!img) return;
      stiker = await sticker(img, false, packname, author);
    } else if (m.text.split(/\n| /i)[0]) {
      if (isUrl(m.text)) stiker = await sticker(false, m.text.split(/\n| /i)[0], packname, author);
      else return;
    }
    if (stiker) {
      await mconn.conn.sendFile(m.chat, stiker, null, {asSticker: true});
    }
  }
  return !0;
};
export default handler;

const isUrl = (text) => {
  return text.match(new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'));
};
