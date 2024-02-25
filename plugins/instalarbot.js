import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];

 await conn.sendMessage(m.chat, { react: { text: '🌥', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `*❬💖 INSTALACIÓN DEL BOT EN TERMUX 💖❭*

𝘿𝙪𝙙𝙖𝙨 𝙨𝙤𝙗𝙧𝙚 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩?
❲🥏❳➜ https://wa.me/19145948340

𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖𝙧 𝙖𝙡𝙜𝙤 𝙘𝙤𝙣 𝙡𝙖 𝙘𝙧𝙚𝙖𝙙𝙤𝙧𝙖?
❲❤️❳➜

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
𝙑𝙞𝙙𝙚𝙤 𝙙𝙚 𝙘𝙤𝙢𝙤 𝙞𝙣𝙨𝙩𝙖𝙡𝙖𝙧 𝙚𝙡 𝙗𝙤𝙩?
❲😻❳➜
⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
🎉 𝙇𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙚𝙣 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 🎉

(𝙲𝚘𝚙𝚒𝚊𝚛 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘 𝚝𝚊𝚕 𝚌𝚘𝚖𝚘 𝚎𝚜𝚝𝚊 𝚎𝚕 𝚟𝚒𝚍𝚎𝚘)

❲1️⃣❳➜ cd && termux-setup-storage

❲2️⃣❳➜ apt-get update -y && apt-get upgrade -y

❲3️⃣❳➜ pkg install -y git nodejs ffmpeg imagemagick && pkg install yarn
 
❲4️⃣❳➜ git clone https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD.git && cd MitsuriBot-MD

❲5️⃣❳➜ yarn install

❲6️⃣❳➜ npm install

❲7️⃣❳➜ npm update

❲8️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
🥵 ¿𝘼𝙥𝙖𝙜𝙖𝙨𝙩𝙚 𝙚𝙡 𝙘𝙚𝙡𝙪 𝙤 𝙨𝙚 𝙩𝙚 𝙖𝙥𝙖𝙜𝙖𝙜𝙤 𝙚𝙡 𝙩𝙚𝙧𝙢𝙪𝙭? 🥵

𝙿𝚊𝚛𝚊 𝚙𝚛𝚎𝚗𝚍𝚎𝚛𝚕𝚘 𝚞𝚜𝚎 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜, 𝚛𝚎𝚌𝚞𝚎𝚛𝚍𝚊 𝚚𝚞𝚎 𝚎𝚜 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘:

❲1️⃣❳➜ cd Mitsuri-Bot-MD

❲2️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰
💝 ¿𝙌𝙪𝙞𝙚𝙧𝙚𝙨 𝙤𝙩𝙧𝙤 𝙘𝙤𝙙𝙞𝙜𝙤 𝙌𝙍? 💝

𝙴𝚜𝚌𝚛𝚒𝚋𝚎 𝚎𝚜𝚝𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚞𝚗𝚘 𝚙𝚘𝚛 𝚞𝚗𝚘:

❲1️⃣❳➜ cd Mitsuri-Bot-MD

❲2️⃣❳➜ rm -rf MitsuriSession

❲3️⃣❳➜ npm start

⊱╌╌╌╌╌╌╌╌╌╌╌╌╌╌⊰`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ⚠️ *_ERROR AL MANDAR EL COMANDO, POR FAVOR INTENTE DE NUEVO._*', m);
  }
};
handler.command = /^(instalarbot|descargarbot)$/i;
handler.register = true
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}