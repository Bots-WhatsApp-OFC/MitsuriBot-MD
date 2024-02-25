const handler = async (m, {conn, text, command, usedPrefix, args}) => {
// let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
  const pp = 'https://telegra.ph/file/c7924bf0e0d839290cc51.jpg';

  // 60000 = 1 minuto // 30000 = 30 segundos // 15000 = 15 segundos // 10000 = 10 segundos
  const time = global.db.data.users[m.sender].wait + 10000;
  if (new Date - global.db.data.users[m.sender].wait < 10000) throw `> *💝 Tendrás que esperar ${Math.floor((time - new Date()) / 1000)} segundos antes de poder volver a jugar*`;

  if (!args[0]) return conn.reply(m.chat, `> 𝐏𝐢𝐞𝐝𝐫𝐚 🤨, 𝐏𝐚𝐩𝐞𝐥 🤨 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 😍\n\n> *😍 Puedes usar estos comandos:*\n> *✨ ${usedPrefix + command} piedra*\n> *✨ ${usedPrefix + command} papel*\n> *✨ ${usedPrefix + command} tijera*`, m);
  // conn.sendButton(m.chat, `*𝐏𝐢𝐞𝐝𝐫𝐚 🤨, 𝐏𝐚𝐩𝐞𝐥 🤨 𝐨 𝐓𝐢𝐣𝐞𝐫𝐚 🤨*\n\n*😍 Puedes usar estos botones o tambien puedes usar estos comandos:*\n*✨ ${usedPrefix + command} piedra*\n*✨ ${usedPrefix + command} papel*\n*✨ ${usedPrefix + command} tijera*`, wm, pp, [['🪨 Piedra 🪨', `${usedPrefix + command} piedra`], ['📰 Papel 📰', `${usedPrefix + command} papel`], ['✂️ Tijera ✂️', `${usedPrefix + command} tijera`]], m)
  let astro = Math.random();
  if (astro < 0.34) {
    astro = 'piedra';
  } else if (astro > 0.34 && astro < 0.67) {
    astro = 'tijera';
  } else {
    astro = 'papel';
  }
  const textm = text.toLowerCase();
  if (textm == astro) {
    global.db.data.users[m.sender].exp += 500;
    m.reply(`*😨 𝗘𝗠𝗣𝗔𝗧𝗘!!!*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +500 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮✨*`);
  } else if (text == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*😍 𝗧𝗨 𝗚𝗔𝗡𝗔𝗦!!! 💖*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +1000 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮✨*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*😂 𝗧𝘂 𝗽𝗶𝗲𝗿𝗱𝗲𝘀! 🗿*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*😻 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁 𝘁𝗲 𝗾𝘂𝗶𝘁𝗮 -300 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    }
  } else if (text == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*😍 𝗧𝗨 𝗚𝗔𝗡𝗔𝗦!!! 💖*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +1000 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*😂 𝗧𝘂 𝗽𝗶𝗲𝗿𝗱𝗲𝘀! 🗿*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*😻 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁 𝘁𝗲 𝗾𝘂𝗶𝘁𝗮 -300 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    }
  } else if (textm == 'tijera') {
    if (astro == 'papel') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*😍 𝗧𝗨 𝗚𝗔𝗡𝗔𝗦!!! 💖*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +1000 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*😂 𝗧𝘂 𝗽𝗶𝗲𝗿𝗱𝗲𝘀! 🗿*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*😻 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁 𝘁𝗲 𝗾𝘂𝗶𝘁𝗮 -300 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    }
  } else if (textm == 'papel') {
    if (astro == 'piedra') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*😍 𝗧𝗨 𝗚𝗔𝗡𝗔𝗦!!! 💖*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +1000 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*😂 𝗧𝘂 𝗽𝗶𝗲𝗿𝗱𝗲𝘀! 🗿*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*😻 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁 𝘁𝗲 𝗾𝘂𝗶𝘁𝗮 -300 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    }
  } else if (textm == 'piedra') {
    if (astro == 'tijera') {
      global.db.data.users[m.sender].exp += 1000;
      m.reply(`*😍 𝗧𝗨 𝗚𝗔𝗡𝗔𝗦!!! 💖*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*👑 𝗣𝗿𝗲𝗺𝗶𝗼/𝗕𝗼𝗻𝗼 +1000 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    } else {
      global.db.data.users[m.sender].exp -= 300;
      m.reply(`*😂 𝗧𝘂 𝗽𝗶𝗲𝗿𝗱𝗲𝘀! 🗿*\n\n*❮😍❯➣ 𝗧𝘂: ${textm}*\n*❮😍❯➣ 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁: ${astro}*\n*😻 𝗠𝗶𝘁𝘀𝘂𝗿𝗶 𝗕𝗼𝘁 𝘁𝗲 𝗾𝘂𝗶𝘁𝗮 -300 𝗱𝗲 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗶𝗮*`);
    }
  }
  global.db.data.users[m.sender].wait = new Date * 1;
};
handler.help = ['ppt'];
handler.tags = ['games'];
handler.command = /^(ppt)$/i;
export default handler;
