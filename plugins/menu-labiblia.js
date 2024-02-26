import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './media/menuvid/menucompleto.mp4');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮🔥❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑨𝑫𝑼𝑳𝑻𝑶...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🥵 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '😳', key: m.key } })
  let txt =`
╭•═══════════════════•╮
║   🔥 \`𝐌𝐈𝐓𝐒𝐔𝐑𝐈 𝐁𝐎𝐓 𝐌𝐃\` 🔥
╰•═══════════════════•╯
❬🌻❭ 𝗡𝗶𝘃𝗲𝗹 ➔ ❲ ${level} ❳ 
❬⭐❭ 𝗘𝘅𝗽 ➔ ❲ ${exp} ❳ 
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 ➔ ❲ ${role} ❳ 
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 ➔ ❲ ${limit} ❳ 
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 ➔ ❲ ${money} ❳ 
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 ➔ ❲ ${joincount} ❳ 
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗔𝗗𝗨𝗟𝗧𝗢𝗦\`
╰•═══════════════════•╯
> ❮🥵❯ ➜ _#pack_
> ❮🥵❯ ➜ _#pack2_
> ❮🥵❯ ➜ _#pack3_
> ❮🥵❯ ➜ _#videoxxx_
> ❮🥵❯ ➜ _#videolesbixxx_
> ❮🥵❯ ➜ _#tetas_
> ❮🥵❯ ➜ _#booty_
> ❮🥵❯ ➜ _#ecchi_
> ❮🥵❯ ➜ _#furro_
> ❮🥵❯ ➜ _#imagenlesbians_
> ❮🥵❯ ➜ _#panties_
> ❮🥵❯ ➜ _#pene_
> ❮🥵❯ ➜ _#porno_
> ❮🥵❯ ➜ _#randomxxx_
> ❮🥵❯ ➜ _#pechos_
> ❮🥵❯ ➜ _#boy3dhot
> ❮🥵❯ ➜ _#yaoi_
> ❮🥵❯ ➜ _#yaoi2_
> ❮🥵❯ ➜ _#yuri_
> ❮🥵❯ ➜ _#yuri2_
> ❮🥵❯ ➜ _#trapito_
> ❮🥵❯ ➜ _#hentai_
> ❮🥵❯ ➜ _#nsfwloli_
> ❮🥵❯ ➜ _#nsfworgy_
> ❮🥵❯ ➜ _#nsfwfoot_
> ❮🥵❯ ➜ _#nsfwass_
> ❮🥵❯ ➜ _#nsfwbdsm_
> ❮🥵❯ ➜ _#nsfwcum_
> ❮🥵❯ ➜ _#nsfwero_
> ❮🥵❯ ➜ _#nsfwfemdom_
> ❮🥵❯ ➜ _#nsfwglass_
> ❮🥵❯ ➜ _#hentaipdf *•texto•*_
> ❮🥵❯ ➜ _#hentaisearch *•texto•*_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuadulto|adultomenu|menupacks)$/i;
handler.register = true
export default handler;
