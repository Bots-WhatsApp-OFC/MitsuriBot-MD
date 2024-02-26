import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
    await conn.sendMessage(m.chat, { react: { text: '🏷', key: m.key } })
  await m.reply(`🌸 𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣 𝙢𝙞𝙣𝙪𝙩𝙤, 𝙨𝙚 𝙚𝙨𝙩𝙖 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙣𝙙𝙤....`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("git remote set-url origin https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD.git && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler