
import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
let stiker = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let autor = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''

if (!/webp|image|video/g.test(mime) && !text) return m.reply(`> 🌸 𝙋𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙪𝙨𝙤 𝙙𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖 𝙖 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 10 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙤 𝙜𝙞𝙛𝙨`)
if (/video/g.test(mime)) if ((q.msg || q).seconds > 10) return m.reply('> 📌 𝙀𝙡 𝙫𝙞𝙙𝙚𝙤 𝙣𝙤 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙙𝙪𝙧𝙖𝙧 𝙢𝙖𝙨 𝙙𝙚 10 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨, 𝙧𝙚𝙘𝙤𝙧𝙩𝙚 𝙚𝙡 𝙫𝙞𝙙𝙚𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧.')

if (/webp|image|video/g.test(mime)) {
let img = await q.download?.()
let out
stiker = await sticker(img, false, global.packname, global.author)
await conn.reply(m.chat, `> 🌸 \`𝘾𝙍𝙀𝘼𝙉𝘿𝙊 𝙎𝙏𝙄𝘾𝙆𝙀𝙍\` 🌸
> 𝙀𝙨𝙥𝙚𝙧𝙚 𝙪𝙣𝙤𝙨 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨...`, m)

if (!stiker) {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)

if (!stiker) errorMessage = 'ERROR'
}} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('> ⚘️ 𝙀𝙡 𝙚𝙣𝙡𝙖𝙘𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖𝙙𝙤 𝙣𝙤 𝙚𝙨 𝙫𝙖𝙡𝙞𝙙𝙤 𝙥𝙖𝙧𝙖 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤, 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙚 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙪𝙣𝙖 𝙞𝙢𝙖𝙜𝙚𝙣, 𝙫𝙞𝙙𝙚𝙤 𝙙𝙚 10 𝙨𝙚𝙜𝙪𝙣𝙙𝙤𝙨 𝙮 𝙜𝙞𝙛𝙨')}

if (stiker) {
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
} else {
console.log(stiker)
}}

handler.command = /^(s(tickers?)?(image|video|gif|img)?)$/i
export default handler

const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}