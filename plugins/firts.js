export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`𖥨ํ∘̥⃟⸽⃟🌹➼ 𝙃𝙤𝙡𝙖 ${username} 🍧
𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤/𝙖 𝙖𝙡 𝙣𝙪𝙢𝙚𝙧𝙤 𝙤𝙛𝙞𝙘𝙞𝙖𝙡
𝙙𝙚 𝙈𝙞𝙩𝙨𝙪𝙧𝙞𝘽𝙤𝙩-𝙈𝘿 🍡

𖥨ํ∘̥⃟⸽⃟🎂➼ 𝙎𝙞 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙖𝙥𝙤𝙮𝙖𝙧𝙢𝙚 𝙥𝙪𝙚𝙙𝙚𝙨 𝙙𝙖𝙧𝙢𝙚
𝙪𝙣𝙖 𝙚𝙨𝙩𝙧𝙚𝙡𝙡𝙖 𝙚𝙣 𝙢𝙞 𝙧𝙚𝙥𝙤𝙨𝙞𝙩𝙤𝙧𝙞𝙤: 😚
> https://github.com/Bots-WhatsApp-OFC/MitsuriBot-MD 🍬

𖥨ํ∘̥⃟⸽⃟🍣➼ 𝙎𝙞 𝙩𝙞𝙚𝙣𝙚𝙨 𝙙𝙪𝙙𝙖𝙨 𝙥𝙪𝙚𝙙𝙚𝙨 𝙘𝙤𝙣𝙩𝙖𝙘𝙩𝙖𝙧 𝙖 𝙨𝙤𝙥𝙤𝙧𝙩𝙚. 🍇
> https://wa.me/5493873687620 🌹

𖥨ํ∘̥⃟⸽⃟🍓➼ 𝘼𝙦𝙪𝙞 𝙥𝙪𝙚𝙙𝙚𝙨 𝙞𝙣𝙞𝙘𝙞𝙖𝙧 𝙘𝙤𝙣 𝙚𝙨𝙩𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨. 🌻
> #menulist
> #menucompleto

𖥨ํ∘̥⃟⸽⃟🥰➼ \`𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙪𝙨𝙖𝙧 𝙈𝙞𝙩𝙨𝙪𝙧𝙞𝘽𝙤𝙩-𝙈𝘿\` 🌸
> 𝙇𝙞𝙯-𝙊𝙁𝘾`) 
user.pc = new Date * 1
}