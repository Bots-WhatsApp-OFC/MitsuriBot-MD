const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('> *❮😍❯➣ Este chat fue baneado con éxito.*\n\n> *❮🍁❯➣ Los usuarios no podran usar el bot ni el bot les contestara.*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
