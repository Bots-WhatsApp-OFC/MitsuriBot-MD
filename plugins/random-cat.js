import fetch from 'node-fetch';
const handler = async (m, {conn, text}) => {
  try {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const img = await res.json();
    const caption = `
🐱 𝙂𝙖𝙩𝙞𝙩𝙤/𝙖 🐱
`.trim();
    conn.sendFile(m.chat, img[0].url, 'cat.jpg', caption, m);
  } catch (e) {
    console.log(e);
    throw '🌸 𝙀𝙧𝙧𝙤𝙧, 𝙣𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙚𝙣𝙫𝙞𝙖𝙧 𝙡𝙖 𝙞𝙢𝙖𝙜𝙚𝙣.';
  }
};
handler.help = ['cat'];
handler.tags = ['random'];
handler.command = /^cat$/i;
handler.fail = null;
export default handler;
