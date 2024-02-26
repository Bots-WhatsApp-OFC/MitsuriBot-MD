let handler = async (m, { conn, isPrems}) => {
let hasil = Math.floor(Math.random() * 1000)
let info = `> 🌸 𝘽𝙧𝙖𝙫𝙤, 𝙡𝙤𝙜𝙧𝙖𝙨𝙩𝙚 𝙢𝙞𝙣𝙖𝙧 𝙡𝙖 𝙘𝙖𝙣𝙩𝙞𝙙𝙖𝙙 𝙙𝙚: ${hasil} 𝙚𝙭𝙥.`
let time = global.db.data.users[m.sender].lastmiming + 600000
if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `> ⏳ 𝙋𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙚𝙨𝙥𝙚𝙧𝙚: ${msToTime(time - new Date())} 𝙥𝙖𝙧𝙖 𝙫𝙤𝙡𝙫𝙚𝙧 𝙖 𝙢𝙞𝙣𝙖𝙧.`  

conn.fakeReply(m.chat, info, '51977272240@s.whatsapp.net', '🌸 𝙈𝙞𝙣𝙖𝙧 𝙚𝙭𝙥𝙚𝙧𝙞𝙚𝙣𝙘𝙞𝙖 🌸', 'status@broadcast')   
//m.reply(`*[ 🎉 ] 𝙶𝚎𝚗𝚒𝚊𝚕, 𝚖𝚒𝚗𝚊𝚜𝚝𝚎 ${hasil} 𝚇𝙿*`)
global.db.data.users[m.sender].lastmiming = new Date * 1

}
handler.help = ['minar']
handler.tags = ['rg']
handler.command = ['minar', 'miming', 'mine'] 
handler.register = true
handler.fail = null
handler.exp = 0
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}