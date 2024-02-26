import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => './media/menuvid/menucompleto.mp4');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '> 🌸💐 \`𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙚𝙡 𝙢𝙚𝙣𝙪 𝙘𝙤𝙢𝙥𝙡𝙚𝙩𝙤\` 😍🌻',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '🍡 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 🍡', body: '𝘼𝙦𝙪𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 😍🌻', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🍣');
    await conn.sendMessage(m.chat, { react: { text: '🌹', key: m.key } })
  let txt =`
✦ ˚ * ✦ * ˚ ✦ ˚ * ✦ * ˚ ✦ ˚ * ✦ 
╭───────────────✧
│✐; 𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤. 🍓
│┆ ✐; 𝘿𝙞𝙨𝙛𝙧𝙪𝙩𝙖 𝙙𝙚𝙡 𝙗𝙤𝙩. 🌹
╰───────────────✧
✦ ˚ * ✦ * ˚ ✦ ˚ * ✦ * ˚ ✦ ˚ * ✦

*╔═══❖•ೋ°ৡৢ͜͡  🌹 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐓𝐔𝐒 𝐑𝐄𝐂𝐔𝐑𝐒𝐎𝐒ू ፝͜❥ᬊ᭄
*╚═══❖•ೋ°ৡৢ͜͡  🌹 𖥨֗°ೋ•❖═══╝*
> ❲📆 \`𝗙𝗲𝗰𝗵𝗮\` 📆❳:
> ${date}

> ❲👑 \`𝗖𝗿𝗲𝗮𝗱𝗼𝗿𝗮\` 👑❳:
> 𝗟𝗶𝘇•𝗢𝗙𝗖

> ❲🔑 \`𝗩𝗲𝗿𝘀𝗶𝗼𝗻\` 🔑❳:
> ${vs}

> ❲🥏 \`𝗧𝗶𝗽𝗼 𝗱𝗲 𝗕𝗼𝘁\` 🥏❳
> ${(conn.user.jid == global.conn.user.jid ? '' : `@${global.conn.user.jid.split`@`[0]}`) || '𝙎𝙤𝙮 𝙪𝙣 𝙗𝙤𝙩 𝙤𝙛𝙞𝙘𝙞𝙖𝙡 😗'}
> •══════════════•
> ❬🪙 𝗠𝗼𝗻𝗲𝗱𝗮𝘀 🪙❭ ➛ ${joincount}
> ❬💰 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀 💰❭ ➛ ${money}
> ❬💎 𝗗𝗶𝗮𝗺𝗮𝗻𝘁𝗲𝘀 💎❭ ➛ ${limit}
> ❬🎒 𝗥𝗮𝗻𝗴𝗼 🎒❭ ➛ ${role}
> ❬🌟 𝗘𝘅𝗽 🌟❭ ➛ ${exp}
> ❬👑 𝗧𝘂 𝗡𝗶𝘃𝗲𝗹 👑❭ ➛ ${level}
> •══════════════•

*╔═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈𝐎𝐍ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╝*
*║❬🌹❭ ➜ _#fixmsgespera_*
*║❬🌹❭ ➜ _#dsowner_*
*║❬🌹❭ ➜ _#estado_*
*║❬🌹❭ ➜ _#tyc_*
*║❬🌹❭ ➜ _#totalfunciones_*
*║❬🌹❭ ➜ _#contribuidores_*
*║❬🌹❭ ➜ _#installbot_*
*║❬🌹❭ ➜ _#speed_*
*║❬🌹❭ ➜ _#cuentas_*
*║❬🌹❭ ➜ _#donar_*
*║❬🌹❭ ➜ _#speedtest_*
*║❬🌹❭ ➜ _#owner_*
*║❬🌹❭ ➜ _#programadores_*
*║❬🌹❭ ➜ _bot_*
*╚═══❖•ೋ°ৡৢ͜͡  🌻 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🍧 𖥨֗°ೋ•❖═══╗*
     ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐑𝐀𝐍𝐃𝐎𝐌ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🍧 𖥨֗°ೋ•❖═══╝*
*║❬🧧❭ ➜ _#dropmail_*
*║❬🧧❭ ➜ _#horario_*
*║❬🧧❭ ➜ _#kpop blackpink_*
*║❬🧧❭ ➜ _#kpop bts_*
*║❬🧧❭ ➜ _#kpop exo_*
*║❬🧧❭ ➜ _#cristianoronaldo_*
*║❬🧧❭ ➜ _#messi_*
*║❬🧧❭ ➜ _#cat_*
*║❬🧧❭ ➜ _#dog_*
*║❬🧧❭ ➜ _#itzy_*
*║❬🧧❭ ➜ _#blackpink_*
*║❬🧧❭ ➜ _#navidad_*
*║❬🧧❭ ➜ _#wpmontaña_*
*║❬🧧❭ ➜ _#pubg_*
*║❬🧧❭ ➜ _#del_* •mensaje•
*║❬🧧❭ ➜ _#covid_* •Pais•
*║❬🧧❭ ➜ _#inspect_* •Link grupal•
*║❬🧧❭ ➜ _#readmore_* •texto/texto•
*║❬🧧❭ ➜ _#hd_* •imagen•
*║❬🧧❭ ➜ _#clima_* •pais • ciudad•
*║❬🧧❭ ➜ _#gptvoz_* •texto•
*║❬🧧❭ ➜ _#chatgpt_* •texto•
*║❬🧧❭ ➜ _#coffee_*
*║❬🧧❭ ➜ _#pentol_*
*║❬🧧❭ ➜ _#delchatgpt_*
*║❬🧧❭ ➜ _#wpmoto_*
*║❬🧧❭ ➜ _#traducir_* •texto•
*║❬🧧❭ ➜ _#nowa_* •Numero•
*║❬🧧❭ ➜ _#ocr_* •imagen•
*║❬🧧❭ ➜ _#afk_* •razon•
*║❬🧧❭ ➜ _#wpaesthetic_*
*║❬🧧❭ ➜ _#wpaesthetic2_*
*║❬🧧❭ ➜ _#wpgaming_*
*║❬🧧❭ ➜ _#styletext_* •texto•
*║❬🧧❭ ➜ _#wpvehiculo_*
*║❬🧧❭ ➜ _#readqr_* •imagen QR•
*║❬🧧❭ ➜ _#wprandom_*
*║❬🧧❭ ➜ _#tamaño_* •cantidad/video•
*║❬🧧❭ ➜ _#tamaño_* •cantidad/imagen•
*║❬🧧❭ ➜ _#start_*
*║❬🧧❭ ➜ _#next_*
*║❬🧧❭ ➜ _#leave_*
*║❬🧧❭ ➜ _#spamwa_* •numero/texto/cantidad•
*║❬🧧❭ ➜ _#encuesta_* •texto/texto•
*║❬🧧❭ ➜ _#wallhp_*
*║❬🧧❭ ➜ _#readviewonce_* •imagen•
*║❬🧧❭ ➜ _#readviewonce_* •video•
*║❬🧧❭ ➜ _#qrcode_* •texto•
*║❬🧧❭ ➜ _#acortar_* •link•
*║❬🧧❭ ➜ _#caricatura_*
*║❬🧧❭ ➜ _#ciberespacio_*
*║❬🧧❭ ➜ _#technology_*
*║❬🧧❭ ➜ _#doraemon_*
*║❬🧧❭ ➜ _#hacker_*
*║❬🧧❭ ➜ _#planeta_*
*║❬🧧❭ ➜ _#randomprofile_*
*║❬🧧❭ ➜ _#unete_* •Link•
*║❬🧧❭ ➜ _#join_* •Link•
*╚═══❖•ೋ°ৡৢ͜͡  🍧 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╗*
       ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐃𝐎𝐑ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╝*
*║❬💾❭ ➜ _#tiktokstalk_* •usuario•
*║❬💾❭ ➜ _#igstory_* •usuario•
*║❬💾❭ ➜ _#igstalk_* •usuario•
*║❬💾❭ ➜ _#pptiktok_* •usuario•
*║❬💾❭ ➜ _#wallpaper_* •texto•
*║❬💾❭ ➜ _#pinterest_* •texto•
*║❬💾❭ ➜ _#imagen_* •texto•
*║❬💾❭ ➜ _#soundcloud_* •texto•
*║❬💾❭ ➜ _#ringtone_* •texto•
*║❬💾❭ ➜ _#spotify_* •texto•
*║❬💾❭ ➜ _#playlist_* •texto•
*║❬💾❭ ➜ _#play_* •texto•
*║❬💾❭ ➜ _#play2_* •texto•
*║❬💾❭ ➜ _#play.1_* •texto•
*║❬💾❭ ➜ _#play.2_* •texto•
*║❬💾❭ ➜ _#playdoc_* •texto•
*║❬💾❭ ➜ _#playdoc2_* •texto•
*║❬💾❭ ➜ _#ytshort_* •link•
*║❬💾❭ ➜ _#ytmp3_* •link•
*║❬💾❭ ➜ _#ytmp3doc_* •link•
*║❬💾❭ ➜ _#ytmp4_* •link•
*║❬💾❭ ➜ _#ytmp4doc_* •link•
*║❬💾❭ ➜ _#videodoc_* •link•
*║❬💾❭ ➜ _#apk_* •nombre•
*║❬💾❭ ➜ _#dapk2_* •nombre•
*║❬💾❭ ➜ _#stickerpack_* •link•
*║❬💾❭ ➜ _#fb_* •link•
*║❬💾❭ ➜ _#twitter_* •link•
*║❬💾❭ ➜ _#xvideosdl_* •link•
*║❬💾❭ ➜ _#xnxxdl_* •link•
*║❬💾❭ ➜ _#tiktokimg_* •link•
*║❬💾❭ ➜ _#tiktok_* •link•
*║❬💾❭ ➜ _#instagram_* •link•
*║❬💾❭ ➜ _#gdrive_* •link•
*║❬💾❭ ➜ _#gitclone_* •link repo•
*║❬💾❭ ➜ _#mediafire_* •link•
*║❬💾❭ ➜ _#githubsearch_* •texto•
*║❬💾❭ ➜ _#pelisplus_* •texto•
*║❬💾❭ ➜ _#modapk_* •texto•
*║❬💾❭ ➜ _#stickersearch_* •texto•
*║❬💾❭ ➜ _#stickersearch2_* •texto•
*║❬💾❭ ➜ _#xnxxsearch_* •texto•
*║❬💾❭ ➜ _#animeinfo_* •texto•
*║❬💾❭ ➜ _#google_* •texto•
*║❬💾❭ ➜ _#letra_* •texto•
*║❬💾❭ ➜ _#reporte_* •texto•
*║❬💾❭ ➜ _#wikipedia_* •texto•
*║❬💾❭ ➜ _#ytsearch_* •texto•
*║❬💾❭ ➜ _#playstore_* •texto•
*╚═══❖•ೋ°ৡৢ͜͡  ⬇️ 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🎳 𖥨֗°ೋ•❖═══╗*
   ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐃𝐄 𝐉𝐔𝐄𝐆𝐎𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🎳 𖥨֗°ೋ•❖═══╝*
*║❬🎮❭ ➜ _#love_*
*║❬🎮❭ ➜ _#ruleta_*
*║❬🎮❭ ➜ _#mates_*
*║❬🎮❭ ➜ _#fake •texto1_* • @tag • texto2•
*║❬🎮❭ ➜ _#ppt •papel_* • tijera • piedra•
*║❬🎮❭ ➜ _#prostituto_* •nombre • @tag•
*║❬🎮❭ ➜ _#prostituta_* •nombre • @tag•
*║❬🎮❭ ➜ _#gay2_* •nombre • @tag•
*║❬🎮❭ ➜ _#lesbiana_* •nombre • @tag•
*║❬🎮❭ ➜ _#pajero_* •nombre • @tag•
*║❬🎮❭ ➜ _#pajera_* •nombre • @tag•
*║❬🎮❭ ➜ _#follar_* •nombre • @tag•
*║❬🎮❭ ➜ _#puto_* •nombre • @tag•
*║❬🎮❭ ➜ _#puta_* •nombre • @tag•
*║❬🎮❭ ➜ _#manco_* •nombre • @tag•
*║❬🎮❭ ➜ _#manca_* •nombre • @tag•
*║❬🎮❭ ➜ _#rata_* •nombre • @tag•
*║❬🎮❭ ➜ _#love_* •nombre • @tag•
*║❬🎮❭ ➜ _#doxear_* •nombre • @tag•
*║❬🎮❭ ➜ _#pregunta_* •texto•
*║❬🎮❭ ➜ _#suitpvp_* •@tag•
*║❬🎮❭ ➜ _#slot_* •apuesta•
*║❬🎮❭ ➜ _#ttt_* •nombre sala•
*║❬🎮❭ ➜ _#delttt_*
*║❬🎮❭ ➜ _#acertijo_*
*║❬🎮❭ ➜ _#personalidad_* •nombre • @tag•
*║❬🎮❭ ➜ _#simi_* •texto•
*║❬🎮❭ ➜ _#top_* •texto•
*║❬🎮❭ ➜ _#topgays_*
*║❬🎮❭ ➜ _#topotakus_*
*║❬🎮❭ ➜ _#formarpareja_*
*║❬🎮❭ ➜ _#verdad_*
*║❬🎮❭ ➜ _#crime_*
*║❬🎮❭ ➜ _#reto_*
*║❬🎮❭ ➜ _#cancion_*
*║❬🎮❭ ➜ _#pista_*
*║❬🎮❭ ➜ _#akinator_*
*║❬🎮❭ ➜ _#wordfind_*
*╚═══❖•ೋ°ৡৢ͜͡  🎳 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐑𝐏𝐆 𝐁𝐎𝐓ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╝*
*║❬🎉❭ ➜ _#unreg_* •nro de serie•
*║❬🎉❭ ➜ _#reg_* •nombre edad•
*║❬🎉❭ ➜ _#transfer_*
*║❬🎉❭ ➜ _#robar_*
*║❬🎉❭ ➜ _#verificar_* •nombre edad•
*║❬🎉❭ ➜ _#buyall_*
*║❬🎉❭ ➜ _#buy_*
*║❬🎉❭ ➜ _#minar_*
*║❬🎉❭ ➜ _#minar2_*
*║❬🎉❭ ➜ _#work_*
*║❬🎉❭ ➜ _#perfil_*
*║❬🎉❭ ➜ _#myns_*
*║❬🎉❭ ➜ _#levelup_*
*║❬🎉❭ ➜ _#level_*
*║❬🎉❭ ➜ _#nivel_*
*║❬🎉❭ ➜ _#lb_*
*║❬🎉❭ ➜ _#heal_*
*║❬🎉❭ ➜ _#claim_*
*║❬🎉❭ ➜ _#balance_*
*║❬🎉❭ ➜ _#cofre_*
*║❬🎉❭ ➜ _#cazar_*
*║❬🎉❭ ➜ _#adventure_*
*╚═══❖•ೋ°ৡৢ͜͡  🎊 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  👥 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐆𝐑𝐔𝐏𝐎𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  👥 𖥨֗°ೋ•❖═══╝*
*║❬👤❭ ➜ _#setpp_*
*║❬👤❭ ➜ _#setname_*
*║❬👤❭ ➜ _#setdesc_* •texto•
*║❬👤❭ ➜ _#setwelcome_* •texto•
*║❬👤❭ ➜ _#setbye_* •texto•
*║❬👤❭ ➜ _#destraba_*
*║❬👤❭ ➜ _#fantasmas_*
*║❬👤❭ ➜ _#listwarn_*
*║❬👤❭ ➜ _#unwarn_* •@tag•
*║❬👤❭ ➜ _#warn_* •@tag•
*║❬👤❭ ➜ _#hidetag_* •video•
*║❬👤❭ ➜ _#hidetag_* •imagen•
*║❬👤❭ ➜ _#hidetag_* •texto•
*║❬👤❭ ➜ _#hidetag_* •nota de voz•
*║❬👤❭ ➜ _#hidetag_* •audio•
*║❬👤❭ ➜ _#invocar_*
*║❬👤❭ ➜ _#tagall_*
*║❬👤❭ ➜ _#link_*
*║❬👤❭ ➜ _#resetlink_*
*║❬👤❭ ➜ _#infogroup_*
*║❬👤❭ ➜ _#demote_* •@tag•
*║❬👤❭ ➜ _#admins_* •texto•
*║❬👤❭ ➜ _#promote_* •@tag•
*║❬👤❭ ➜ _#grouptime_*
*║❬👤❭ ➜ _#grupo abrir_* 
*║❬👤❭ ➜ _#grupo cerrar_*
*║❬👤❭ ➜ _#kicknum_* •texto•
*║❬👤❭ ➜ _#listanum_* •texto•
*║❬👤❭ ➜ _#unmute_* •@tag•
*║❬👤❭ ➜ _#mute_* •@tag•
*║❬👤❭ ➜ _#kick_* •@tag•
*║❬👤❭ ➜ _#kick2_* •@tag•
*║❬👤❭ ➜ _#add_* •numero•
*║❬👤❭ ➜ _#salir_* •admins•
*╚═══❖•ೋ°ৡৢ͜͡  👥 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🟢 𖥨֗°ೋ•❖═══╗*
 ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐂𝐎𝐃𝐈𝐆𝐎𝐒: 𝐎𝐍 𝐘 𝐎𝐅𝐅ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🔴 𖥨֗°ೋ•❖═══╝*
*║❬🟢❭ ➜ _#on restrict_*
*║❬🟢❭ ➜ _#on autoread_*
*║❬🟢❭ ➜ _#on antispam_*
*║❬🟢❭ ➜ _#on anticall_*
*║❬🟢❭ ➜ _#on modoia_*
*║❬🟢❭ ➜ _#on audios_bot_*
*║❬🟢❭ ➜ _#on antiprivado_*
*║❬🟢❭ ➜ _#on welcome_*
*║❬🟢❭ ➜ _#on modohorny_*
*║❬🟢❭ ➜ _#on antilink_*
*║❬🟢❭ ➜ _#on antilink2_*
*║❬🟢❭ ➜ _#on juegos_*
*║❬🟢❭ ➜ _#on detect_*
*║❬🟢❭ ➜ _#on audios_*
*║❬🟢❭ ➜ _#on autosticker_*
*║❬🟢❭ ➜ _#on antiviewonce_*
*║❬🟢❭ ➜ _#on antitoxic_*
*║❬🟢❭ ➜ _#on antitraba_*
*║❬🟢❭ ➜ _#on antiarabes_*
*║❬🟢❭ ➜ _#on modoadmin_*
*║❬🟢❭ ➜ _#on antidelete_*
*║•═════════════════•*
*║❬🔴❭ ➜ _#off restrict_*
*║❬🔴❭ ➜ _#off autoread_*
*║❬🔴❭ ➜ _#off antispam_*
*║❬🔴❭ ➜ _#off anticall_*
*║❬🔴❭ ➜ _#off modoia_*
*║❬🔴❭ ➜ _#off audios_bot_*
*║❬🔴❭ ➜ _#off antiprivado_*
*║❬🔴❭ ➜ _#off welcome_*
*║❬🔴❭ ➜ _#off modohorny_*
*║❬🔴❭ ➜ _#off antilink_*
*║❬🔴❭ ➜ _#off antilink2_*
*║❬🔴❭ ➜ _#off juegos_*
*║❬🔴❭ ➜ _#off detect_*
*║❬🔴❭ ➜ _#off audios_*
*║❬🔴❭ ➜ _#off autosticker_*
*║❬🔴❭ ➜ _#off antiviewonce_*
*║❬🔴❭ ➜ _#off antitoxic_*
*║❬🔴❭ ➜ _#off antitraba_*
*║❬🔴❭ ➜ _#off antiarabes_*
*║❬🔴❭ ➜ _#off modoadmin_*
*║❬🔴❭ ➜ _#off antidelete_*
*╚═══❖•ೋ°ৡৢ͜͡  🟢 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╗*
     ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 𝐘 𝐌𝐀𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╝*
*║❬🍀❭ ➜ _#wm_*
*║❬🌻❭ ➜ _#dado_*
*║❬🍀❭ ➜ _#kiss_* •@tag•
*║❬🌻❭ ➜ _#slap_* •@tag•
*║❬🍀❭ ➜ _#pat_* •@tag•
*║❬🌻❭ ➜ _#attp_* •texto•
*║❬🍀❭ ➜ _#attp2_* •texto•
*║❬🌻❭ ➜ _#attp3_* •texto•
*║❬🍀❭ ➜ _#ttp_* •texto•
*║❬🌻❭ ➜ _#ttp2_* •texto•
*║❬🍀❭ ➜ _#ttp3_* •texto•
*║❬🌻❭ ➜ _#ttp4_* •texto•
*║❬🍀❭ ➜ _#ttp5_* •texto•
*║❬🌻❭ ➜ _#qc_* •texto•
*║❬🍀❭ ➜ _#semoji_* •emoji•
*║❬🌻❭ ➜ _#scircle_* •imagen•
*║❬🍀❭ ➜ _#sremovebg_* •imagen•
*║❬🌻❭ ➜ _#emojimix_* •emoji • emoji•
*║❬🍀❭ ➜ _#sticker_* •imagen•
*║❬🌻❭ ➜ _#sticker_* •video•
*║❬🍀❭ ➜ _#sticker_* •gif•
*║❬🌻❭ ➜ _#sticker_* •link•
*║❬🍀❭ ➜ _#s_* •imagen•
*║❬🌻❭ ➜ _#s_* •video•
*║❬🍀❭ ➜ _#s_* •gif•
*║❬🌻❭ ➜ _#s_* •link•
*║❬🍀❭ ➜ _#sticker2_* •imagen•
*║❬🌻❭ ➜ _#sticker2_* •video•
*║❬🍀❭ ➜ _#sticker2_* •imagen•
*║❬🌻❭ ➜ _#sticker2_* •link•
*║❬🍀❭ ➜ _#tts_* •texto•
*║❬🌻❭ ➜ _#tts_* •efecto•
*║❬🍀❭ ➜ _#tts_* •idioma•
*║❬🌻❭ ➜ _#tourl_* •video•
*║❬🍀❭ ➜ _#tourl_* •imagen•
*║❬🌻❭ ➜ _#tourl_* •audio•
*║❬🍀❭ ➜ _#tovideo_* •sticker•
*║❬🌻❭ ➜ _#toptt_* •video•
*║❬🍀❭ ➜ _#toptt_* •audio•
*║❬🌻❭ ➜ _#tomp3_* •nota de voz•
*║❬🍀❭ ➜ _#tomp3_* •video•
*║❬🌻❭ ➜ _#toimg_* •sticker•
*║❬🍀❭ ➜ _#togifaud_* •video•
*║❬🌻❭ ➜ _#toanime_* •video•
*╚═══❖•ೋ°ৡৢ͜͡  🌇 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🤖 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐒𝐄𝐑 𝐁𝐎𝐓ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🤖 𖥨֗°ೋ•❖═══╝*
*║❬🌐❭ ➜ _#serbot_*
*║❬🌐❭ ➜ _#serbot --code_*
*║❬🌐❭ ➜ _#botclone_*
*║❬🌐❭ ➜ _#jadibot_*
*║❬🌐❭ ➜ _#token_*
*║❬🌐❭ ➜ _#stop_*
*║❬🌐❭ ➜ _#bots_*
*║❬🌐❭ ➜ _#deletebot_*
*╚═══❖•ೋ°ৡৢ͜͡  🤖 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🏙️ 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐋𝐎𝐆𝐎𝐒 𝐘 𝐌𝐀𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🌌 𖥨֗°ೋ•❖═══╝*
*║❬🌉❭ ➜ _#blur_*
*║❬🌉❭ ➜ _#pixelar_*
*║❬🌉❭ ➜ _#itssostupid_*
*║❬🌉❭ ➜ _#lolice_*
*║❬🌉❭ ➜ _#simpcard_* •@tag•
*║❬🌉❭ ➜ _#hornycard_* •@tag• 
*║❬🌉❭ ➜ _#ytcomment_* •texto•
*║❬🌉❭ ➜ _#logocorazon_* •texto•
*║❬🌉❭ ➜ _#logochristmas_* •texto•
*║❬🌉❭ ➜ _#logos_*
*║❬🌉❭ ➜ _#piropo_*
*║❬🌉❭ ➜ _#consejo_*
*║❬🌉❭ ➜ _#fraseromantica_*
*║❬🌉❭ ➜ _#historiaromantica_*
*╚═══❖•ೋ°ৡৢ͜͡  🌅 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  🔊 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐀𝐔𝐃𝐈𝐎𝐒 𝐘 𝐌𝐀𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  🔊 𖥨֗°ೋ•❖═══╝*
*║* ❬🎤 \`AUDIOS DEL BOT\` 🎤❭
*║❬🎧❭ ➜ _Quien es tu sempai botsito 7w7_*
*║❬🎧❭ ➜ _Te diagnostico con gay_*
*║❬🎧❭ ➜ _No digas eso papu_*
*║❬🎧❭ ➜ _A nadie le importa_*
*║❬🎧❭ ➜ _Fiesta del admin_*
*║❬🎧❭ ➜ _Fiesta del administrador_*
*║❬🎧❭ ➜ _Vivan los novios_*
*║❬🎧❭ ➜ _Feliz cumpleaños_*
*║❬🎧❭ ➜ _Noche de paz_*
*║❬🎧❭ ➜ _Buenos dias_*
*║❬🎧❭ ➜ _Buenos tardes_*
*║❬🎧❭ ➜ _Buenos noches_*
*║❬🎧❭ ➜ _Audio hentai_*
*║❬🎧❭ ➜ _Chica lgante_*
*║❬🎧❭ ➜ _Feliz navidad_*
*║❬🎧❭ ➜ _Vete a la vrg_*
*║❬🎧❭ ➜ _Pasa pack Bot_*
*║❬🎧❭ ➜ _Atencion grupo_*
*║❬🎧❭ ➜ _Marica quien_*
*║❬🎧❭ ➜ _Murio el grupo_*
*║❬🎧❭ ➜ _Oh me vengo_*
*║❬🎧❭ ➜ _tio que rico_*
*║❬🎧❭ ➜ _Viernes_*
*║❬🎧❭ ➜ _Baneado_*
*║❬🎧❭ ➜ _Sexo_*
*║❬🎧❭ ➜ _Nyanpasu_*
*║❬🎧❭ ➜ _Te amo_*
*║❬🎧❭ ➜ _Yamete_*
*║❬🎧❭ ➜ _Bañate_*
*║❬🎧❭ ➜ _La biblia_*
*║❬🎧❭ ➜ _Mierda de Bot_*
*║❬🎧❭ ➜ _Siuuu_*
*║❬🎧❭ ➜ _Epico_*
*║❬🎧❭ ➜ _Shitpost_*
*║❬🎧❭ ➜ _Rawr_*
*║❬🎧❭ ➜ _:c_*
*║❬🎧❭ ➜ _a_*
*║•═════════════════•*
*║* ❬🎧 \`EDITAR AUDIOS\` 🎧❭
*║❬🎤❭ ➜ _#bass_*
*║❬🎤❭ ➜ _#blown_*
*║❬🎤❭ ➜ _#deep_*
*║❬🎤❭ ➜ _#earrape_*
*║❬🎤❭ ➜ _#fast_*
*║❬🎤❭ ➜ _#fat_*
*║❬🎤❭ ➜ _#nightcore_*
*║❬🎤❭ ➜ _#reverse_*
*║❬🎤❭ ➜ _#robot_*
*║❬🎤❭ ➜ _#slow_*
*║❬🎤❭ ➜ _#smooth_*
*║❬🎤❭ ➜ _#tupai_*
*╚═══❖•ೋ°ৡৢ͜͡  🔊 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  ⛩️ 𖥨֗°ೋ•❖═══╗*
      ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄𝐒ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  ⛩️ 𖥨֗°ೋ•❖═══╝*
*║❬🍡❭ ➜ _#sakurita_*
*║❬🍡❭ ➜ _#karolg_*
*║❬🍡❭ ➜ _#antiguo_*
*║❬🍡❭ ➜ _#lolivid_*
*║❬🍡❭ ➜ _#loli_*
*║❬🍡❭ ➜ _#ppcouple_*
*║❬🍡❭ ➜ _#neko_*
*║❬🍡❭ ➜ _#waifu_*
*║❬🍡❭ ➜ _#akira_*
*║❬🍡❭ ➜ _#akiyama_*
*║❬🍡❭ ➜ _#anna_*
*║❬🍡❭ ➜ _#asuna_*
*║❬🍡❭ ➜ _#ayuzawa_*
*║❬🍡❭ ➜ _#boruto_*
*║❬🍡❭ ➜ _#chiho_*
*║❬🍡❭ ➜ _#chitoge_*
*║❬🍡❭ ➜ _#deidara_*
*║❬🍡❭ ➜ _#erza_*
*║❬🍡❭ ➜ _#elaina_*
*║❬🍡❭ ➜ _#eba_*
*║❬🍡❭ ➜ _#emilia_*
*║❬🍡❭ ➜ _#hestia_*
*║❬🍡❭ ➜ _#hinata_*
*║❬🍡❭ ➜ _#inori_*
*║❬🍡❭ ➜ _#isuzu_*
*║❬🍡❭ ➜ _#itachi_*
*║❬🍡❭ ➜ _#itori_*
*║❬🍡❭ ➜ _#kaga_*
*║❬🍡❭ ➜ _#kagura_*
*║❬🍡❭ ➜ _#kaori_*
*║❬🍡❭ ➜ _#keneki_*
*║❬🍡❭ ➜ _#kotori_*
*║❬🍡❭ ➜ _#kurumi_*
*║❬🍡❭ ➜ _#madara_*
*║❬🍡❭ ➜ _#mikasa_*
*║❬🍡❭ ➜ _#miku_*
*║❬🍡❭ ➜ _#minato_*
*║❬🍡❭ ➜ _#naruto_*
*║❬🍡❭ ➜ _#nezuko_*
*║❬🍡❭ ➜ _#sagiri_*
*║❬🍡❭ ➜ _#sasuke_*
*║❬🍡❭ ➜ _#sakura_*
*║❬🍡❭ ➜ _#cosplay_*
*╚═══❖•ೋ°ৡৢ͜͡  ⛩️ 𖥨֗°ೋ•❖═══╝*


*╔═══❖•ೋ°ৡৢ͜͡  👑 𖥨֗°ೋ•❖═══╗*
  ᬊ᭄ঔৣ͜͡ீ͜❥͜𝐌𝐄𝐍𝐔 𝐏𝐀𝐑𝐀 𝐎𝐖𝐍𝐄𝐑ू ፝͜❥ᬊ᭄
*╠═══❖•ೋ°ৡৢ͜͡  👑 𖥨֗°ೋ•❖═══╝*
*║❬👑❭ ➜ _>_* •funcion•
*║❬👑❭ ➜ _=>_* •funcion•
*║❬👑❭ ➜ _$_* •funcion•
*║❬👑❭ ➜ _#cajafuerte_*
*║❬👑❭ ➜ _#desactivar_* •numero•
*║❬👑❭ ➜ _#reunion_* •texto•
*║❬👑❭ ➜ _#setprefix_* •prefijo•
*║❬👑❭ ➜ _#resetprefix_*
*║❬👑❭ ➜ _#autoadmin_*
*║❬👑❭ ➜ _#grouplist_*
*║❬👑❭ ➜ _#chetar_*
*║❬👑❭ ➜ _#leavegc_*
*║❬👑❭ ➜ _#cajafuerte_*
*║❬👑❭ ➜ _#blocklist_*
*║❬👑❭ ➜ _#addowner_* •@tag/numero•
*║❬👑❭ ➜ _#delowner_* •@tag/numero•
*║❬👑❭ ➜ _#block_* •@tag/numero•
*║❬👑❭ ➜ _#unblock_* •@tag/numero•
*║❬👑❭ ➜ _#on restrict_*
*║❬👑❭ ➜ _#off restrict_*
*║❬👑❭ ➜ _#on autoread_*
*║❬👑❭ ➜ _#off autoread_*
*║❬👑❭ ➜ _#on public_*
*║❬👑❭ ➜ _#off public_*
*║❬👑❭ ➜ _#on pconly_*
*║❬👑❭ ➜ _#off pconly_*
*║❬👑❭ ➜ _#on gconly_*
*║❬👑❭ ➜ _#off gconly_*
*║❬👑❭ ➜ _#on anticall_*
*║❬👑❭ ➜ _#off anticall_*
*║❬👑❭ ➜ _#on antiprivado_*
*║❬👑❭ ➜ _#off antiprivado_*
*║❬👑❭ ➜ _#on antispam_*
*║❬👑❭ ➜ _#off antispam_*
*║❬👑❭ ➜ _#msg_* •texto•
*║❬👑❭ ➜ _#banchat_*
*║❬👑❭ ➜ _#unbanchat_*
*║❬👑❭ ➜ _#resetuser_* •@tag•
*║❬👑❭ ➜ _#banuser_* •@tag•
*║❬👑❭ ➜ _#unbanuser_* •@tag•
*║❬👑❭ ➜ _#dardiamantes_* •@tag/cantidad•
*║❬👑❭ ➜ _#añadirxp_* •@tag/cantidad•
*║❬👑❭ ➜ _#banuser_* •@tag•
*║❬👑❭ ➜ _#bc_* •texto•
*║❬👑❭ ➜ _#bcchats_* •texto•
*║❬👑❭ ➜ _#bcgc_* •texto•
*║❬👑❭ ➜ _#bcgc2_* •audio•
*║❬👑❭ ➜ _#bcgc2_* •video•
*║❬👑❭ ➜ _#bcgc2_* •imagen•
*║❬👑❭ ➜ _#bcbot_* •texto•
*║❬👑❭ ➜ _#cleartpm_*
*║❬👑❭ ➜ _#restart_*
*║❬👑❭ ➜ _#update_*
*║❬👑❭ ➜ _#banlist_*
*║❬👑❭ ➜ _#addprem_* •@tag • tiempo•
*║❬👑❭ ➜ _#addprem2_* •@tag • tiempo•
*║❬👑❭ ➜ _#addprem3_* •@tag • tiempo•
*║❬👑❭ ➜ _#addprem4_* •@tag • tiempo•
*║❬👑❭ ➜ _#delprem_* •@tag•
*║❬👑❭ ➜ _#listcmd_*
*║❬👑❭ ➜ _#setppbot_* •imagen•
*║❬👑❭ ➜ _#addcmd_* •texto • sticker • imagen•
*║❬👑❭ ➜ _#delcm_* •sticker • imagen•
*║❬👑❭ ➜ _#saveimage_*
*║❬👑❭ ➜ _#pviewimage_*
*╚═══❖•ೋ°ৡৢ͜͡  👑 𖥨֗°ೋ•❖═══╝*

> 💞 𝙈𝙞𝙩𝙨𝙪𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 💞`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '🍓⸽⃕  𝕾𝖆𝖐𝖚𝖗𝖆 - 𝕭𝖔𝖙 - 𝕷𝖎𝖙𝖊 - 𝕸𝕯 🦋⸽⃕✰', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.gp1, "sourceUrl": global.gp1}}}, {quoted: fkon});
 // m.react('🔥');
  } catch {
    conn.reply(m.chat, '❮⚠️❯ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menucompleto|allmenu)$/i;
handler.register = true
export default handler;