let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `> 🌸 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙪𝙖𝙡 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙦𝙪𝙚 𝙚𝙡 𝙗𝙤𝙩 𝙩𝙚𝙣𝙜𝙖.`
  try {
    await conn.updateProfileName(text)
    m.reply('> ✅ 𝙀𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙛𝙪𝙚 𝙘𝙖𝙢𝙗𝙞𝙖𝙙𝙤 𝙘𝙤𝙣 𝙚𝙭𝙞𝙩𝙤.')
  } catch (e) {
    console.log(e)
    throw `> 𝙉𝙤 𝙨𝙚 𝙥𝙪𝙙𝙤 𝙘𝙖𝙢𝙗𝙞𝙖𝙧 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙗𝙤𝙩.`
  }
}
handler.help = ['setbotname <teks>']
handler.tags = ['owner']
handler.command = /^(setbotname|cambianombre)$/i

handler.owner = true

export default handler