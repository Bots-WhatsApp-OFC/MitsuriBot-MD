const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `> *❮🔥❯➣ Por favor ingrese un reporte.*\n\n> *❮🥳❯➣ Por ejemplo:*\n> *${usedPrefix + command} el comando ${usedPrefix}play no manda nada*`;
  if (text.length < 10) throw `> *❮💎❯➣ El mensaje es demasiado corto, minimo tiene que superar a los 10 caracteres!*`;
  if (text.length > 6000) throw `> *❮⚠️❯➣ El reporte sobrepasó a los 6000 caracteres, por favor borre algunos carácteres.*`;
  const teks = `╭•🍄•┈┈┈••┈┈••✦🍀✦••┈┈••┈┈┈•🍄•╮\n*╎   𝙍𝙀𝙋𝙊𝙍𝙏𝙀 𝘿𝙀 𝙁𝘼𝙇𝙇𝙊𝙎/𝙀𝙍𝙍𝙊𝙍𝙀𝙎*\n╰•🍄•┈┈┈••┈┈••✦🍀✦••┈┈••┈┈┈•🍄•╯\n\n⋆⁺˖⸙̭🍁➣ *Numero del usuario/a:*\n◊➣ wa.me/${m.sender.split`@`[0]}\n\n\n⋆⁺˖⸙̭❤️➣ *mensaje:*\n◊➣ ${text}`;
  conn.reply('51977272240@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('19145948340@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`> *❮🔥❯➣ El reporte fue enviado con exito a la Creadora y sus SubCreadores del bot, tendra respuesta lo antes posible si el error es cierto, si es falso, se le ignorara el mensaje.*`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|reportar|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;