import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://i.postimg.cc/y6wnXJhj/Picsart-23-10-19-20-27-53-676.jpg');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '❮😍❯ ➜ \`𝑬𝑵𝑽𝑰𝑨𝑵𝑫𝑶 𝑬𝑳 𝑴𝑬𝑵𝑼 𝑹𝑨𝑵𝑫𝑶𝑴...\`',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '˚₊*̥✧⊹˚✩—𝐈 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔—‧✩˚₊*̥✧⊹˚', body: '🌻 𝙃𝙤𝙡𝙖 𝙜𝙪𝙖𝙥𝙤/𝙖', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🌸');
    await conn.sendMessage(m.chat, { react: { text: '🍓', key: m.key } })
  let txt =`
╭•═══════════════════•╮
║   🍧 \`𝐌𝐈𝐓𝐒𝐔𝐑𝐈 𝐁𝐎𝐓 𝐌𝐃\` 🍧
╰•═══════════════════•╯
❬🌻❭ 𝗡𝗶𝘃𝗲𝗹 ➔ ❲ ${level} ❳ 
❬⭐❭ 𝗘𝘅𝗽 ➔ ❲ ${exp} ❳ 
❬👤❭ 𝗥𝗮𝗻𝗴𝗼 ➔ ❲ ${role} ❳ 
❬💎❭ 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 ➔ ❲ ${limit} ❳ 
❬🪙❭ 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 ➔ ❲ ${money} ❳ 
❬🧧❭ 𝗕𝗼𝗹𝗲𝘁𝗼𝘀 ➔ ❲ ${joincount} ❳ 
╭•═══════════════════•╮
║  \`𝗠𝗘𝗡𝗨 𝗥𝗔𝗡𝗗𝗢𝗠 𝗕𝗢𝗧\`
╰•═══════════════════•╯
> ❮🪄❯ ➜ *_#dropmail_*
> ❮🪄❯ ➜ *_#horario_*
> ❮🪄❯ ➜ *_#kpop blackpink_*
> ❮🪄❯ ➜ *_#kpop bts_*
> ❮🪄❯ ➜ *_#kpop exo_*
> ❮🪄❯ ➜ *_#cristianoronaldo_*
> ❮🪄❯ ➜ *_#messi_*
> ❮🪄❯ ➜ *_#cat_*
> ❮🪄❯ ➜ *_#dog_*
> ❮🪄❯ ➜ *_#itzy_*
> ❮🪄❯ ➜ *_#blackpink_*
> ❮🪄❯ ➜ *_#navidad_*
> ❮🪄❯ ➜ *_#wpmontaña_*
> ❮🪄❯ ➜ *_#pubg_*
> ❮🪄❯ ➜ *_#del_* •mensaje•
> ❮🪄❯ ➜ *_#covid_* •Pais•
> ❮🪄❯ ➜ *_#inspect_* •Link grupal•
> ❮🪄❯ ➜ *_#readmore_* •texto/texto•
> ❮🪄❯ ➜ *_#hd_* •imagen•
> ❮🪄❯ ➜ *_#clima_* •pais • ciudad•
> ❮🪄❯ ➜ *_#gptvoz_* •texto•
> ❮🪄❯ ➜ *_#chatgpt_* •texto•
> ❮🪄❯ ➜ *_#coffee_*
> ❮🪄❯ ➜ *_#pentol_*
> ❮🪄❯ ➜ *_#delchatgpt_*
> ❮🪄❯ ➜ *_#wpmoto_*
> ❮🪄❯ ➜ *_#traducir_* •texto•
> ❮🪄❯ ➜ *_#nowa_* •Numero•
> ❮🪄❯ ➜ *_#ocr_* •imagen•
> ❮🪄❯ ➜ *_#afk_* •razon•
> ❮🪄❯ ➜ *_#wpaesthetic_*
> ❮🪄❯ ➜ *_#wpaesthetic2_*
> ❮🪄❯ ➜ *_#wpgaming_*
> ❮🪄❯ ➜ *_#styletext_* •texto•
> ❮🪄❯ ➜ *_#wpvehiculo_*
> ❮🪄❯ ➜ *_#readqr_* •imagen QR•
> ❮🪄❯ ➜ *_#wprandom_*
> ❮🪄❯ ➜ *_#tamaño_* •cantidad/video•
> ❮🪄❯ ➜ *_#tamaño_* •cantidad/imagen•
> ❮🪄❯ ➜ *_#start_*
> ❮🪄❯ ➜ *_#next_*
> ❮🪄❯ ➜ *_#leave_*
> ❮🪄❯ ➜ *_#spamwa_* •numero/texto/cantidad•
> ❮🪄❯ ➜ *_#encuesta_* •texto/texto•
> ❮🪄❯ ➜ *_#wallhp_*
> ❮🪄❯ ➜ *_#readviewonce_* •imagen•
> ❮🪄❯ ➜ *_#readviewonce_* •video•
> ❮🪄❯ ➜ *_#qrcode_* •texto•
> ❮🪄❯ ➜ *_#acortar_* •link•
> ❮🪄❯ ➜ *_#caricatura_*
> ❮🪄❯ ➜ *_#ciberespacio_*
> ❮🪄❯ ➜ *_#technology_*
> ❮🪄❯ ➜ *_#doraemon_*
> ❮🪄❯ ➜ *_#hacker_*
> ❮🪄❯ ➜ *_#planeta_*
> ❮🪄❯ ➜ *_#randomprofile_*
> ❮🪄❯ ➜ *_#unete_* •Link•
> ❮🪄❯ ➜ *_#join_* •Link•`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 - 𝘽𝙤𝙩 - 𝙈𝘿 🌸', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '> ❮⚠️❯ ➜ 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙢𝙖𝙣𝙙𝙤 𝙚𝙧𝙧𝙤𝙧, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menurandom|menualeatorio|menulol)$/i;
handler.register = true
export default handler;
