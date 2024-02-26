import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './media/menuvid/menucompleto.mp4';
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

 await conn.sendMessage(m.chat, { react: { text: '🌹', key: m.key } })


const document = doc[Math.floor(Math.random() * doc.length)];
 const str = `
╭••┈·┈•🌸•┈••✦ •🌹• ✦••┈•🌸•┈·┈••
╏ \`LISTA DE MENUS DISPONIBLES\`
╰••┈·┈•🌸•┈••✦ •🌹• ✦••┈•🌸•┈·┈••

> ❮👤 ${taguser} 👤❯:

\`TUS RECURSOS:\`
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 • ${limit}
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 • ${joincount}
❬⭐❭ 𝗘𝘅𝗽 • ${exp}
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 • ${money}
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 • ${rol}
❬👑❭ 𝗡𝗶𝘃𝗲𝗹 • ${level}

•╍╍╍╍╍╍╍╍╍╍╍╍╍╍•

> ❮🌎 \`DATOS / INFO\` 🌎❯:

❬⏳❭ \`Tiempo\` • ${uptime}
❬📆❭ \`Fecha\` • ${dare}
❬✅❭ \`Registrados\` • ${rtotalreg}

•╍╍╍╍╍╍╍╍╍╍╍╍╍╍•
${readMore}

> ❮🌸 \`MENU COMPLETO\` 🌸❯:
> #allmenu
> #menucompleto
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🎒 \`MENU INFO\` 🎒❯:
> #menuinfo
> #menuinformacion
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮👥 \`MENU GRUPAL\` 👥❯:
> #menugroup
> #menugrupal
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🎊 \`MENU RPG\` 🎊❯:
> #menurpg
> #menueconomia
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🎨 \`STICKERS Y MAS\` 🎨❯:
> #menustickers
> #menustick
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🔐 \`MENU CAJA FUERTE\` 🔐❯:
> #menuseguro
> #menucajafuerte
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🟢 \`ON Y OFF\` 🔴❯:
> #menufunction
> #menufuncion
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮👑 \`MENU OWNER\` 👑❯:
> #menuowner
> #menucreadores
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🎰 \`MENU JUEGOS\` 🎰❯:
> #menugame
> #menujuegos
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🤖 \`MENU BOT\` 🤖❯:
> #menubot
> #menurobot
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🎧 \`MENU AUDIOS\` 🎧❯:
> #menuaudios
> #menuads
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮⬇️ \`DESCARGAS\` ⬇️❯:
> #menuplay
> #menudl
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🌻 \`MENU ALEATORIO\` 🌻❯:
> #menurandom
> #menulol
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮⛩️ \`MENU ANIME\` ⛩️❯:
> #menuanime
> #menujapon
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> ❮🌉 \`MENU LOGOS\` 🌉❯:
> #menuportadas
> #menulgs
> •╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•`.trim();     if (m.isGroup) { 
 // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ *_Ocurrio un error al enviar el menu, por favor intente de nuevo..._*', m);
  }
};
handler.command = /^(menu|menú|help|comandos)$/i;
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