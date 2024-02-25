import TicTacToe from '../lib/tictactoe.js';
const handler = async (m, {conn, usedPrefix, command, text}) => {
  conn.game = conn.game ? conn.game : {};
  if (Object.values(conn.game).find((room) => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '> *❮🤖❯➤ Aun estas en un juego con alguien.*';
  if (!text) throw `> *❮🤖❯➤ Para comenzar se requiere poner nombre a la sala del juego.*\n\n> *❮🍁❯➤ Por ejemplo:*\n*➤ ${usedPrefix + command} nueva sala*`;
  let room = Object.values(conn.game).find((room) => room.state === 'WAITING' && (text ? room.name === text : true));
  if (room) {
    await m.reply('> *❮🎉❯➤ Inicia el juego, un/a jugador/a entro al juego.*');
    room.o = m.chat;
    room.game.playerO = m.sender;
    room.state = 'PLAYING';
    const arr = room.game.render().map((v) => {
      return {
        X: '✖️',
        O: '⭕',
        1: '1️⃣',
        2: '2️⃣',
        3: '3️⃣',
        4: '4️⃣',
        5: '5️⃣',
        6: '6️⃣',
        7: '7️⃣',
        8: '8️⃣',
        9: '9️⃣',
      }[v];
    });
    const str = `
╔•╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍•
╏ *❮🎲 TRES EN RAYA 🎳❯*
╚•╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍•
> 𝙅𝙪𝙜𝙖𝙙𝙤𝙧 *1*
✖️ = @${room.game.playerX.split('@')[0]}
•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•
> 𝙅𝙪𝙜𝙖𝙙𝙤𝙧 *2*
⭕ = @${room.game.playerO.split('@')[0]}
•╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌•

        ${arr.slice(0, 3).join('')}
        ${arr.slice(3, 6).join('')}
        ${arr.slice(6).join('')}

❮😍❯ 𝘼𝙝𝙤𝙧𝙖 𝙚𝙨 𝙩𝙪𝙧𝙣𝙤 𝙙𝙚: @${room.game.currentTurn.split('@')[0]}
`.trim();
    if (room.x !== room.o) await conn.sendMessage(room.x, {text: str, mentions: this.parseMention(str)}, {quoted: m});
    await conn.sendMessage(room.o, {text: str, mentions: conn.parseMention(str)}, {quoted: m});
  } else {
    room = {
      id: 'tictactoe-' + (+new Date),
      x: m.chat,
      o: '',
      game: new TicTacToe(m.sender, 'o'),
      state: 'WAITING'};
    if (text) room.name = text;
    const imgplay = `https://cope-cdnmed.agilecontent.com/resources/jpg/8/9/1590140413198.jpg`;
    conn.reply(m.chat, `😍 𝙀𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙖𝙡 𝙨𝙚𝙜𝙪𝙣𝙙𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧\n𝙋𝙖𝙧𝙖 𝙖𝙗𝙖𝙣𝙙𝙤𝙣𝙖𝙧 𝙚𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙪𝙨𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: *${usedPrefix}delttt*\n\n𝙋𝙖𝙧𝙖 𝙪𝙣𝙞𝙧𝙩𝙚 𝙖𝙡 𝙟𝙪𝙚𝙜𝙤, 𝙪𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤: (${usedPrefix + command} ${text})`, m);
    // conn.sendButton(m.chat, `*🕹 𝘛𝘳𝘦𝘴 𝘌𝘯 𝘙𝘢𝘭𝘭𝘢 🎮*\n\n*◉ 𝐸𝑠𝑝𝑒𝑟𝑎𝑛𝑑𝑜 𝐴𝑙 𝑆𝑒𝑔𝑢𝑛𝑑𝑜 𝐽𝑢𝑔𝑎𝑑𝑜𝑟\n*◉ 𝑃𝑎𝑟𝑎 𝐵𝑜𝑟𝑟𝑎𝑟 𝑂 𝑆𝑎𝑙𝑖𝑟𝑠𝑒 𝐷𝑒 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎 𝑈𝑠𝑒 𝐸𝑙 𝐶𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix}delttt*`, wm, imgplay, [['𝑈𝑛𝑖𝑟𝑠𝑒 𝐴 𝐿𝑎 𝑃𝑎𝑟𝑡𝑖𝑑𝑎', `${usedPrefix + command} ${text}`]], m, { mentions: conn.parseMention(text) })
    conn.game[room.id] = room;
  }
};
handler.command = /^(tictactoe|ttc|ttt|xo)$/i;
handler.register = true
export default handler;