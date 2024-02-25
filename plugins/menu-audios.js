import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮🔊❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑨𝑼𝑫𝑰𝑶...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🎧 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '🔊', key: m.key } })
  let txt =`
╭•═══════════════════•╮
║   🌸 \`𝐌𝐈𝐓𝐒𝐔𝐑𝐈 𝐁𝐎𝐓 𝐌𝐃\` 🌸
╰•═══════════════════•╯
❬🌻❭ 𝗡𝗶𝘃𝗲𝗹 ➔ ❲ ${level} ❳ 
❬⭐❭ 𝗘𝘅𝗽 ➔ ❲ ${exp} ❳ 
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 ➔ ❲ ${role} ❳ 
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 ➔ ❲ ${limit} ❳ 
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 ➔ ❲ ${money} ❳ 
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 ➔ ❲ ${joincount} ❳ 
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗔𝗨𝗗𝗜𝗢𝗦\`
╰•═══════════════════•╯
> ❮🌹❯ ➜ _Quien es tu sempai botsito 7w7_
> ❮🌹❯ ➜ _Te diagnostico con gay_
> ❮🌹❯ ➜ _No digas eso papu_
> ❮🌹❯ ➜ _A nadie le importa_
> ❮🌹❯ ➜ _Fiesta del admin_
> ❮🌹❯ ➜ _Fiesta del administrador_ 
> ❮🌹❯ ➜ _Vivan los novios_
> ❮🌹❯ ➜ _Feliz cumpleaños_
> ❮🌹❯ ➜ _Noche de paz_
> ❮🌹❯ ➜ _Buenos dias_
> ❮🌹❯ ➜ _Buenos tardes_
> ❮🌹❯ ➜ _Buenos noches_
> ❮🌹❯ ➜ _Audio hentai_
> ❮🌹❯ ➜ _Chica lgante_
> ❮🌹❯ ➜ _Feliz navidad_
> ❮🌹❯ ➜ _Vete a la vrg_
> ❮🌹❯ ➜ _Pasa pack Bot_
> ❮🌹❯ ➜ _Atencion grupo_
> ❮🌹❯ ➜ _Marica quien_
> ❮🌹❯ ➜ _Murio el grupo_
> ❮🌹❯ ➜ _Oh me vengo_
> ❮🌹❯ ➜ _tio que rico_
> ❮🌹❯ ➜ _Viernes_
> ❮🌹❯ ➜ _Baneado_
> ❮🌹❯ ➜ _Sexo_
> ❮🌹❯ ➜ _Nyanpasu_
> ❮🌹❯ ➜ _Te amo_
> ❮🌹❯ ➜ _Yamete_
> ❮🌹❯ ➜ _Bañate_
> ❮🌹❯ ➜ _La biblia_
> ❮🌹❯ ➜ _Mierda de Bot_
> ❮🌹❯ ➜ _Siuuu_
> ❮🌹❯ ➜ _Epico_
> ❮🌹❯ ➜ _Shitpost_
> ❮🌹❯ ➜ _Rawr_
> ❮🌹❯ ➜ _:c_
> ❮🌹❯ ➜ _a_
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗘𝗗𝗜𝗧𝗔𝗥\`
╰•═══════════════════•╯
> ❮🌻❯ ➜ _#bass_
> ❮🌻❯ ➜ _#blown_
> ❮🌻❯ ➜ _#deep_
> ❮🌻❯ ➜ _#earrape_
> ❮🌻❯ ➜ _#fast_
> ❮🌻❯ ➜ _#fat_
> ❮🌻❯ ➜ _#nightcore_
> ❮🌻❯ ➜ _#reverse_
> ❮🌻❯ ➜ _#robot_
> ❮🌻❯ ➜ _#slow_
> ❮🌻❯ ➜ _#smooth_
> ❮🌻❯ ➜ _#tupai_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuaudios|menuads)$/i;
handler.register = true
export default handler;