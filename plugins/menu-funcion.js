import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮👑❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑶𝑵 𝒀 𝑶𝑭𝑭...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🥰 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '💐', key: m.key } })
  let txt =`
╭•═══════════════════•╮
║   🌻 \`𝐌𝐈𝐓𝐒𝐔𝐑𝐈 𝐁𝐎𝐓 𝐌𝐃\` 🌻
╰•═══════════════════•╯
❬🌻❭ 𝗡𝗶𝘃𝗲𝗹 ➔ ❲ ${level} ❳ 
❬⭐❭ 𝗘𝘅𝗽 ➔ ❲ ${exp} ❳ 
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 ➔ ❲ ${role} ❳ 
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 ➔ ❲ ${limit} ❳ 
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 ➔ ❲ ${money} ❳ 
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 ➔ ❲ ${joincount} ❳ 
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗥\`
╰•═══════════════════•╯
> ❮💚❯ ➜ *_#on restrict_*
> ❮💚❯ ➜ *_#on autoread_*
> ❮💚❯ ➜ *_#on antispam_*
> ❮💚❯ ➜ *_#on anticall_*
> ❮💚❯ ➜ *_#on modoia_*
> ❮💚❯ ➜ *_#on audios_bot_*
> ❮💚❯ ➜ *_#on antiprivado_*
> ❮💚❯ ➜ *_#on welcome_*
> ❮💚❯ ➜ *_#on modohorny_*
> ❮💚❯ ➜ *_#on antilink_*
> ❮💚❯ ➜ *_#on antilink2_*
> ❮💚❯ ➜ *_#on juegos_*
> ❮💚❯ ➜ *_#on detect_*
> ❮💚❯ ➜ *_#on audios_*
> ❮💚❯ ➜ *_#on autosticker_*
> ❮💚❯ ➜ *_#on antiviewonce_*
> ❮💚❯ ➜ *_#on antitoxic_*
> ❮💚❯ ➜ *_#on antitraba_*
> ❮💚❯ ➜ *_#on antiarabes_*
> ❮💚❯ ➜ *_#on modoadmin_*
> ❮💚❯ ➜ *_#on antidelete_*
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥\`
╰•═══════════════════•╯
> ❮❤️❯ ➜ *_#off restrict_*
> ❮❤️❯ ➜ *_#off autoread_*
> ❮❤️❯ ➜ *_#off antispam_*
> ❮❤️❯ ➜ *_#off anticall_*
> ❮❤️❯ ➜ *_#off modoia_*
> ❮❤️❯ ➜ *_#off audios_bot_*
> ❮❤️❯ ➜ *_#off antiprivado_*
> ❮❤️❯ ➜ *_#off welcome_*
> ❮❤️❯ ➜ *_#off modohorny_*
> ❮❤️❯ ➜ *_#off antilink_*
> ❮❤️❯ ➜ *_#off antilink2_*
> ❮❤️❯ ➜ *_#off juegos_*
> ❮❤️❯ ➜ *_#off detect_*
> ❮❤️❯ ➜ *_#off audios_*
> ❮❤️❯ ➜ *_#off autosticker_*
> ❮❤️❯ ➜ *_#off antiviewonce_*
> ❮❤️❯ ➜ *_#off antitoxic_*
> ❮❤️❯ ➜ *_#off antitraba_*
> ❮❤️❯ ➜ *_#off antiarabes_*
> ❮❤️❯ ➜ *_#off modoadmin_*
> ❮❤️❯ ➜ *_#off antidelete_*`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menufunction|menufuncion|menuconfirmacion)$/i;
handler.register = true
export default handler;
