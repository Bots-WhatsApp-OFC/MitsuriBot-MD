import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
       title: '😍 𝙇𝙞𝙣𝙠/𝙀𝙣𝙡𝙖𝙘𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 😍',
      body: '🌸 𝑴𝒊𝒕𝒔𝒖𝒓𝒊𝑩𝒐𝒕-𝑴𝑫 🌸',    
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
 sourceUrl: `https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD`}}});
};     
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
