import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const cristiano = (await axios.get(`https://raw.githubusercontent.com/Bots-WhatsApp-OFC/MitsuriBot-MD/master/src/JSON/CristianoRonaldo.json`)).data;
  const ronaldo = await cristiano[Math.floor(cristiano.length * Math.random())];
  conn.sendFile(m.chat, ronaldo, 'error.jpg', `😳 𝙎𝙞𝙪𝙪𝙪𝙪𝙪 😳`, m);
};
// conn.sendButton(m.chat, "*Siiiuuuuuu*", author, ronaldo, [['⚽ SIGUIENTE ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['cristianoronaldo', 'cr7'];
handler.tags = ['internet'];
handler.command = /^(cristianoronaldo|cr7)$/i;
export default handler;
