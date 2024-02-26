import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let sn = createHash('md5').update(m.sender).digest('hex')

conn.fakeReply(m.chat, sn, '51977272240@s.whatsapp.net', '🌸 𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙨𝙚𝙧𝙞𝙚 🌸', 'status@broadcast')
}
handler.help = ['myns']
handler.tags = ['rg']
handler.command = /^(myns|ceksn)$/i
handler.register = true
export default handler