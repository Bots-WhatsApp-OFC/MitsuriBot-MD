import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './media/menuvid/menucompleto.mp4');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮🌸❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑶𝑾𝑵𝑬𝑹...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🤭 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '🥰', key: m.key } })
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
║  \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗢𝗪𝗡𝗘𝗥𝗦\`
╰•═══════════════════•╯
> ❮👑❯ ➜ _> *•funcion•*
> ❮👑❯ ➜ _=> *•funcion•*
> ❮👑❯ ➜ _$ *•funcion•*
> ❮👑❯ ➜ _#cajafuerte_
> ❮👑❯ ➜ _#desactivar *•numero•*_
> ❮👑❯ ➜ _#reunion_ *•texto•*
> ❮👑❯ ➜ _#setprefix *•prefijo•*_
> ❮👑❯ ➜ _#resetprefix_
> ❮👑❯ ➜ _#autoadmin_
> ❮👑❯ ➜ _#grouplist_
> ❮👑❯ ➜ _#chetar_
> ❮👑❯ ➜ _#leavegc_
> ❮👑❯ ➜ _#cajafuerte_
> ❮👑❯ ➜ _#blocklist_
> ❮👑❯ ➜ _#addowner *•@tag/numero•*_
> ❮👑❯ ➜ _#delowner *•@tag/numero•*_
> ❮👑❯ ➜ _#block *•@tag/numero•*_
> ❮👑❯ ➜ _#unblock *•@tag/numero•*_
> ❮👑❯ ➜ _#on *restrict*_
> ❮👑❯ ➜ _#off *restrict*_
> ❮👑❯ ➜ _#on *autoread*_
> ❮👑❯ ➜ _#off *autoread*_
> ❮👑❯ ➜ _#on *public*_
> ❮👑❯ ➜ _#off *public*_
> ❮👑❯ ➜ _#on *pconly*_
> ❮👑❯ ➜ _#off *pconly*_
> ❮👑❯ ➜ _#on *gconly*_
> ❮👑❯ ➜ _#off *gconly*_
> ❮👑❯ ➜ _#on *anticall*_
> ❮👑❯ ➜ _#off *anticall*_
> ❮👑❯ ➜ _#on *antiprivado*_
> ❮👑❯ ➜ _#off *antiprivado*_
> ❮👑❯ ➜ _#on *antispam*_
> ❮👑❯ ➜ _#off *antispam*_
> ❮👑❯ ➜ _#msg *•texto•*_
> ❮👑❯ ➜ _#banchat_
> ❮👑❯ ➜ _#unbanchat_
> ❮👑❯ ➜ _#resetuser *•@tag•*_
> ❮👑❯ ➜ _#banuser *•@tag•*_
> ❮👑❯ ➜ _#unbanuser *•@tag•*_
> ❮👑❯ ➜ _#dardiamantes *•@tag/cantidad•*_
> ❮👑❯ ➜ _#añadirxp *•@tag/cantidad•*_
> ❮👑❯ ➜ _#banuser *•@tag•*_
> ❮👑❯ ➜ _#bc *•texto•*_
> ❮👑❯ ➜ _#bcchats *•texto•*_
> ❮👑❯ ➜ _#bcgc *•texto•*_
> ❮👑❯ ➜ _#bcgc2 *•audio•*_
> ❮👑❯ ➜ _#bcgc2 *•video•*_
> ❮👑❯ ➜ _#bcgc2 *•imagen•*_
> ❮👑❯ ➜ _#bcbot *•texto•*_
> ❮👑❯ ➜ _#cleartpm_
> ❮👑❯ ➜ _#restart_
> ❮👑❯ ➜ _#update_
> ❮👑❯ ➜ _#banlist_
> ❮👑❯ ➜ _#addprem *•@tag/tiempo•*_
> ❮👑❯ ➜ _#addprem2 *•@tag/tiempo•*_
> ❮👑❯ ➜ _#addprem3 *•@tag/tiempo•*_
> ❮👑❯ ➜ _#addprem4 *•@tag/tiempo•*_
> ❮👑❯ ➜ _#delprem *•@tag•*_
> ❮👑❯ ➜ _#listcmd_
> ❮👑❯ ➜ _#setppbot *•imagen•*_
> ❮👑❯ ➜ _#addcmd *•texto/sticker/imagen•*_
> ❮👑❯ ➜ _#delcmd *•sticker/imagen•*_
> ❮👑❯ ➜ _#saveimage_
> ❮👑❯ ➜ _#pviewimage_`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuowner|ownermenu|menucreadores)$/i;
handler.register = true
export default handler;
