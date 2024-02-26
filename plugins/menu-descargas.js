import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/231b618729371a4e30f0e.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮⬇️❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑫𝑬𝑺𝑪𝑨𝑹𝑮𝑨𝑺...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🎄 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '🔊', key: m.key } })
  let txt =`
╭•═══════════════════•╮
║   🌹 \`𝐌𝐈𝐓𝐒𝐔𝐑𝐈 𝐁𝐎𝐓 𝐌𝐃\` 🌹
╰•═══════════════════•╯
❬🌻❭ 𝗡𝗶𝘃𝗲𝗹 ➔ ❲ ${level} ❳ 
❬⭐❭ 𝗘𝘅𝗽 ➔ ❲ ${exp} ❳ 
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 ➔ ❲ ${role} ❳ 
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 ➔ ❲ ${limit} ❳ 
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 ➔ ❲ ${money} ❳ 
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 ➔ ❲ ${joincount} ❳ 
╭•═══════════════════•╮
║ \`𝗠𝗘𝗡𝗨 𝗣𝗔𝗥𝗔 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦\`
╰•═══════════════════•╯
> ❮🛰️❯ ➜ *_#tiktokstalk_* •usuario•
> ❮🛰️❯ ➜ *_#igstory_* •usuario•
> ❮🛰️❯ ➜ *_#igstalk_* •usuario•
> ❮🛰️❯ ➜ *_#pptiktok_* •usuario•
> ❮🛰️❯ ➜ *_#wallpaper_* •texto•
> ❮🛰️❯ ➜ *_#pinterest_* •texto•
> ❮🛰️❯ ➜ *_#imagen_* •texto•
> ❮🛰️❯ ➜ *_#soundcloud_* •texto•
> ❮🛰️❯ ➜ *_#ringtone_* •texto•
> ❮🛰️❯ ➜ *_#spotify_* •texto•
> ❮🛰️❯ ➜ *_#playlist_* •texto•
> ❮🛰️❯ ➜ *_#play_* •texto•
> ❮🛰️❯ ➜ *_#play2_* •texto•
> ❮🛰️❯ ➜ *_#play.1_* •texto•
> ❮🛰️❯ ➜ *_#play.2_* •texto•
> ❮🛰️❯ ➜ *_#playdoc_* •texto•
> ❮🛰️❯ ➜ *_#playdoc2_* •texto•
> ❮🛰️❯ ➜ *_#ytshort_* •link•
> ❮🛰️❯ ➜ *_#ytmp3_* •link•
> ❮🛰️❯ ➜ *_#ytmp3doc_* •link•
> ❮🛰️❯ ➜ *_#ytmp4_* •link•
> ❮🛰️❯ ➜ *_#ytmp4doc_* •link•
> ❮🛰️❯ ➜ *_#videodoc_* •link•
> ❮🛰️❯ ➜ *_#apk_* •nombre•
> ❮🛰️❯ ➜ *_#dapk2_* •nombre•
> ❮🛰️❯ ➜ *_#stickerpack_* •link•
> ❮🛰️❯ ➜ *_#fb_* •link•
> ❮🛰️❯ ➜ *_#twitter_* •link•
> ❮🛰️❯ ➜ *_#xvideosdl_* •link•
> ❮🛰️❯ ➜ *_#xnxxdl_* •link•
> ❮🛰️❯ ➜ *_#tiktokimg_* •link•
> ❮🛰️❯ ➜ *_#tiktok_* •link•
> ❮🛰️❯ ➜ *_#instagram_* •link•
> ❮🛰️❯ ➜ *_#gdrive_* •link•
> ❮🛰️❯ ➜ *_#gitclone_* •link repo•
> ❮🛰️❯ ➜ *_#mediafire_* •link•
> ❮🛰️❯ ➜ *_#githubsearch_* •texto•
> ❮🛰️❯ ➜ *_#pelisplus_* •texto•
> ❮🛰️❯ ➜ *_#modapk_* •texto•
> ❮🛰️❯ ➜ *_#stickersearch_* •texto•
> ❮🛰️❯ ➜ *_#stickersearch2_* •texto•
> ❮🛰️❯ ➜ *_#xnxxsearch_* •texto•
> ❮🛰️❯ ➜ *_#animeinfo_* •texto•
> ❮🛰️❯ ➜ *_#google_* •texto•
> ❮🛰️❯ ➜ *_#letra_* •texto•
> ❮🛰️❯ ➜ *_#reporte_* •texto•
> ❮🛰️❯ ➜ *_#wikipedia_* •texto•
> ❮🛰️❯ ➜ *_#ytsearch_* •texto•
> ❮🛰️❯ ➜ *_#playstore_* •texto•`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuplay|menudl)$/i;
handler.register = true
export default handler;