let handler = async(m, { conn, command, text }) => {

  let users = m.sender.split`@`[0]
  if ( users == 51977272240 || users == 5493873687620) try {
  if (!text) return m.reply(`> ⚠️ 𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙥𝙖𝙧𝙖 𝙘𝙧𝙚𝙖𝙧 𝙪𝙣𝙖 𝙧𝙚𝙪𝙣𝙞𝙤𝙣.`)
    if (text.length < 10) return m.reply(`𝙀𝙡 𝙢𝙤𝙩𝙞𝙫𝙤 𝙚𝙨 𝙙𝙚𝙢𝙖𝙘𝙞𝙖𝙙𝙤 𝙘𝙤𝙧𝙩𝙤, 𝙙𝙚𝙗𝙚 𝙙𝙚 𝙩𝙚𝙣𝙚𝙧 𝙢𝙞𝙣𝙞𝙢𝙤 10 𝙡𝙚𝙩𝙧𝙖𝙨.`)

    let texto = `
> 🌸 𝙀𝙡/𝙇𝙖 𝙪𝙨𝙪𝙖𝙧𝙞𝙤/𝙖 @${m.sender.split`@`[0]} 𝙨𝙤𝙡𝙞𝙘𝙞𝙩𝙤 𝙡𝙖 𝙟𝙪𝙣𝙩𝙖 𝙙𝙚 𝙡𝙤𝙨 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨.

\`𝙏𝙀𝙓𝙏𝙊/𝙈𝙀𝙉𝙎𝘼𝙅𝙀:\`
• ${text}

🌸 \`𝙈𝙞𝙩𝙨𝙪𝙧𝙞 𝘽𝙤𝙩 𝙈𝘿\` 🌸`
m.reply('> 🎄 𝙀𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙨𝙚𝙧𝙖 𝙚𝙣𝙫𝙞𝙖𝙙𝙤 𝙖 𝙡𝙤𝙨 𝙙𝙚𝙨𝙖𝙧𝙧𝙤𝙡𝙡𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚𝙡 𝙗𝙤𝙩.')
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
                        let data = (await conn.onWhatsApp(jid))[0] || {}
                        if (data.exists)
                        conn.sendPayment(data.jid, '99', texto, m)}
  } catch (e) { await conn.reply(m.chat, '⚠️ 𝙀𝙧𝙧𝙤𝙧, 𝙣𝙤 𝙨𝙚 𝙚𝙣𝙫𝙞𝙤 𝙚𝙡 𝙢𝙚𝙣𝙨𝙖𝙟𝙚, 𝙫𝙪𝙚𝙡𝙫𝙖 𝙖 𝙞𝙣𝙩𝙚𝙣𝙩𝙖𝙧𝙡𝙤.', m)
               console.log(e)
               } else {
    await m.reply('😂 𝙇𝙤 𝙨𝙞𝙚𝙣𝙩𝙤, 𝙣𝙤 𝙩𝙞𝙚𝙣𝙚𝙨 𝙥𝙚𝙧𝙢𝙞𝙨𝙤 𝙙𝙚 𝙪𝙨𝙖𝙧 𝙚𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤.')}

                           // conn.reply(data.jid, text, m, { mentions: [m.sender] })


}
handler.tags = ['owner']
handler.command = handler.help =['reunion']
handler.rowner = true

export default handler