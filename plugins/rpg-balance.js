const handler = async (m, {usedPrefix}) => {
  let who;
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
  else who = m.sender;
  const name = conn.getName(who);
  m.reply(`
> ❮🌸 𝗕𝗔𝗟𝗔𝗡𝗖𝗘 / 𝗠𝗜𝗧𝗦𝗨𝗥𝗜 𝗕𝗢𝗧 🌸❯:  

𝘕𝘰𝘮𝘣𝘳𝘦: ${name}

𝘋𝘪𝘢𝘮𝘢𝘯𝘵𝘦𝘴: ${global.db.data.users[who].diamond} 

𝘌𝘹𝘱: ${global.db.data.users[who].exp}

❒══════════════════❒

> *INFORMACIÓN:* 
> *_Puedes comprar diamantes con estos comandos a continuación:_*

> ❮💰❯➢ *${usedPrefix}buy (cantidad)*
_Elegir cantidad de diamantes, ejemplo: .buy 5_

> ❮🏆❯➢ *${usedPrefix}buyall*
_Generar diamantes de forma automática._`)
};
handler.help = ['bal'];
handler.tags = ['xp'];
handler.command = ['bal', 'diamantes', 'diamond', 'balance'];
export default handler;
