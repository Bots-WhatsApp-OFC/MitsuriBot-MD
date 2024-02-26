const handler = async (m, {conn, isROwner, text}) => {
  const delay = (time) => new Promise((res) => setTimeout(res, time));
  const getGroups = await conn.groupFetchAllParticipating();
  const groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
  const anu = groups.map((v) => v.id);
  const pesan = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!pesan) throw '> *❮😻❯➤ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧, 𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙦𝙪𝙚 𝙦𝙪𝙞𝙚𝙧𝙖 𝙩𝙧𝙖𝙣𝙨𝙢𝙞𝙩𝙞𝙧.*';
  // m.reply(`*𝖬𝖾𝗇𝗌𝖺𝗃𝖾 𝖤𝗇𝗏𝗂𝖺𝖽𝗈 𝖠 : ${anu.length} 𝖦𝗋𝗎𝗉𝗈𝗌*\n\n*𝘗𝘶𝘦𝘥𝘦 𝘴𝘦𝘳 𝘲𝘶𝘦 𝘯𝘰 𝘴𝘦 𝘦𝘯𝘷𝘪𝘦 𝘢 𝘵𝘰𝘥𝘰𝘴 𝘭𝘰𝘴 𝘤𝘩𝘢𝘵𝘴 𝘱𝘰𝘳 𝘴𝘱𝘢𝘮 𝘰 𝘱𝘶𝘦𝘥𝘦 𝘮𝘢𝘯𝘥𝘢𝘳 𝘳𝘭 𝘣𝘰𝘵 𝘢𝘭 𝘴𝘰𝘱𝘰𝘳𝘵𝘦*`)
  for (const i of anu) {
    await delay(500);
    conn.relayMessage(i,
        {liveLocationMessage: {
          degreesLatitude: 35.685506276233525,
          degreesLongitude: 139.75270667105852,
          accuracyInMeters: 0,
          degreesClockwiseFromMagneticNorth: 2,
          caption: '> 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n\n' + pesan + '\n\n🌸 𝙈𝙞𝙩𝙨𝙪𝙧𝙞 𝘽𝙤𝙩 𝙈𝘿 🌸',
          sequenceNumber: 2,
          timeOffset: 3,
          contextInfo: m,
        }}, {}).catch((_) => _);
  }
  m.reply(`> 🌸 𝙀𝙣𝙫𝙞𝙖𝙣𝙙𝙤 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙖: ${anu.length} 𝙜𝙧𝙪𝙥𝙤𝙨\n\n> ⚠️ 𝙋𝙪𝙚𝙙𝙚 𝙦𝙪𝙚 𝙚𝙨𝙩𝙤 𝙩𝙚 𝙡𝙡𝙚𝙫𝙚 𝙖 𝙨𝙤𝙥𝙤𝙧𝙩𝙚 𝙤 𝙣𝙤 𝙛𝙪𝙣𝙘𝙞𝙤𝙣𝙚, 𝙜𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙡𝙚𝙚𝙧.`);
};
handler.help = ['broadcastgroup', 'bcgc'].map((v) => v + ' <teks>');
handler.tags = ['owner'];
handler.command = /^(bcgc)$/i;
handler.owner = true;

export default handler;