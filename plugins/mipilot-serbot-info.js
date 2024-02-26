import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
  const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
  function convertirMsADiasHorasMinutosSegundos(ms) {
  var segundos = Math.floor(ms / 1000);
  var minutos = Math.floor(segundos / 60);
  var horas = Math.floor(minutos / 60);
  var días = Math.floor(horas / 24);

  segundos %= 60;
  minutos %= 60;
  horas %= 24;

  var resultado = "";
  if (días !== 0) {
    resultado += días + " días, ";
  }
  if (horas !== 0) {
    resultado += horas + " horas, ";
  }
  if (minutos !== 0) {
    resultado += minutos + " minutos, ";
  }
  if (segundos !== 0) {
    resultado += segundos + " segundos";
  }

  return resultado;
}

  const message = users.map((v, index) => `*• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n${index + 1}.-* @${v.user.jid.replace(/[^0-9]/g, '')}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🎀❯➤ 𝗟𝗜𝗡𝗞:* wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🍀❯➤ 𝗡𝗢𝗠𝗕𝗥𝗘:* ${v.user.name || '-'}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •\n*❮🌍❯➤ 𝗧𝗜𝗘𝗠𝗣𝗢 𝗔𝗖𝗧𝗜𝗩𝗢:* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}\n• • ┄┄╍╍╍╍╍╍╍╍💗╍╍╍╍╍╍╍╍┄┄ • •`).join('\n\n');
  const replyMessage = message.length === 0 ? '*𖥨ํ∘̥⃟⸽⃟💌➣ Por el momento no hay SubBots intente nuevamente mas tarde.*\n\n*PUEDE SER POR ESTOS MOTIVOS:*\n\n*𖥨ํ∘̥⃟⸽⃟💌➣ Puede que todabia nadie a usado SubBot en este bot, lo cual no hay SubBots disponibles.*\n*𖥨ํ∘̥⃟⸽⃟💌➣ Puede que esten en soporte o eliminaron session en el bot, lo cual no hay SubBots disponibles.*' : message;
  const totalUsers = users.length;
  const responseMessage = `${replyMessage.trim()}`.trim();
await m.reply(`Aqui tienes la lista de subbots:\n\nSubBots:: ${totalUsers || '0'}`)
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m});
}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;

/*async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '✨️ Wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu\n(${v.name})\n\n`).join('\n\n')
const replyMessage = (message.length === 0) ? "*✨ 𝘕𝘰 𝘏𝘢𝘺 𝘚𝘶𝘣𝘣𝘰𝘵𝘴 𝘋𝘪𝘴𝘱𝘰𝘯𝘪𝘣𝘭𝘦 𝘗𝘰𝘳 𝘌𝘭 𝘔𝘰𝘮𝘦𝘯𝘵𝘰 . 🌵Vᴇʀɪғɪǫᴜᴇ Mᴀs Tᴀʀᴅᴇ.*" : message
await m.reply( '*🚀 𝘈𝘲𝘶𝘪 𝘛𝘪𝘦𝘯𝘦 𝘓𝘢 𝘓𝘪𝘴𝘵𝘢 𝘋𝘦 𝘓𝘰𝘴 𝘚𝘶𝘣 𝘉𝘰𝘵𝘴 𝘈𝘤𝘵𝘪𝘷𝘰𝘴 𝘌𝘯 𝘌𝘴𝘵𝘰𝘴 𝘔𝘰𝘮𝘦𝘯𝘵𝘰𝘴*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']
export default handler*/