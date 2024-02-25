import fetch from 'node-fetch';
import translate from '@vitalets/google-translate-api';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == 'end') {
    if (!aki.sesi) return m.reply('> ❲💖❳➮ 𝙉𝙤 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙙𝙚 𝘼𝙠𝙞𝙣𝙖𝙩𝙤𝙧');
    aki.sesi = false;
    aki.soal = null;
    m.reply('> ❲💖❳➮ 𝙎𝙚 𝙚𝙡𝙞𝙢𝙞𝙣𝙤 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚 𝙡𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙙𝙚 𝘼𝙠𝙞𝙩𝙖𝙣𝙤𝙧.');
  } else {
    if (aki.sesi) return conn.reply(m.chat, '> ❲💖❳➮ 𝙏𝙤𝙙𝙖𝙫𝙞𝙖 𝙚𝙨𝙩𝙖𝙨 𝙚𝙣 𝙪𝙣𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖 𝙙𝙚 𝘼𝙠𝙞𝙣𝙖𝙩𝙤𝙧.', aki.soal);
    try {
      const res = await fetch(`https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`);
      const anu = await res.json();
      if (anu.status !== 200) throw '> ❲⛔❳➮ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.';
      const {server, frontaddr, session, signature, question, progression, step} = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {to: 'es', autoCorrect: false});
      let txt = `> 🔮 𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑 🔮\n\n> 𝙅𝙪𝙜𝙖𝙙𝙤𝙧: @${m.sender.split('@')[0]}\n> 𝙋𝙧𝙚𝙜𝙪𝙣𝙩𝙖: *${resultes2.text}*\n\n`;
      txt += '*0 - Sí*\n';
      txt += '*1 - No*\n';
      txt += '*2 - No sé*\n';
      txt += '*3 - Probablemente sí*\n';
      txt += '*4 - Probablemente no*\n\n';
      txt += `😍 𝙋𝙪𝙚𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: ${usedPrefix + command} end 𝙥𝙖𝙧𝙖 𝙨𝙖𝙡𝙞𝙧 𝙚𝙣 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤 𝙙𝙚 𝘼𝙠𝙞𝙣𝙖𝙩𝙤𝙧.`;
      const soal = await conn.sendMessage(m.chat, {text: txt, mentions: [m.sender]}, {quoted: m});
      aki.soal = soal;
    } catch {
      m.reply('> ❲⛔❳➮ 𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙞𝙣𝙚𝙨𝙥𝙚𝙧𝙖𝙙𝙤, 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙞𝙣𝙩𝙚𝙣𝙩𝙚𝙡𝙤 𝙙𝙚 𝙣𝙪𝙚𝙫𝙤.');
    }
  }
};
handler.menu = ['akinator'];
handler.tags = ['game'];
handler.command = /^(akinator)$/i;
export default handler;
