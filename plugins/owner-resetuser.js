const handler = async (m, { conn, text }) => {
    const numberPattern = /\d+/g;
    let user = '';
    const numberMatches = text.match(numberPattern);
    if (numberMatches) {
        const number = numberMatches.join('');
        user = number + '@s.whatsapp.net';
    } else if (m.quoted && m.quoted.sender) {
        const quotedNumberMatches = m.quoted.sender.match(numberPattern);
        if (quotedNumberMatches) {
            const number = quotedNumberMatches.join('');
            user = number + '@s.whatsapp.net';
        } else {
        return conn.sendMessage(m.chat, {text: `> *❮🧧❯➣ Formato de usuario no reconocido. Responda a un mensaje, etiquete a un/a usuario/a o escriba su número de/la usuario/a.*`}, {quoted: m});
    }
    } else {
        return conn.sendMessage(m.chat, {text: `> *❮🧧❯➣ Formato de usuario no reconocido. Responda a un mensaje, etiquete a un/a usuario/a o escriba su número de/la usuario/a.*`}, {quoted: m});
    }        
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {};
        const participants = m.isGroup ? groupMetadata.participants : [];
        const users = m.isGroup ? participants.find(u => u.jid == user) : {};
        const userNumber = user.split('@')[0];
        if (!global.global.db.data.users[user] || global.global.db.data.users[user] == '') {
            return conn.sendMessage(m.chat, {text: `> *❮💎❯➣ El/la usuario/a @${userNumber} no se encuentra en mi base de datos.*`, mentions: [user]}, {quoted: m});
         }
        delete global.global.db.data.users[user];
        conn.sendMessage(m.chat, {text: `> 🌸 𝙏𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙙𝙖𝙩𝙤𝙨 𝙙𝙚𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤: @${userNumber} 𝙮𝙖 𝙣𝙤 𝙚𝙨𝙩𝙖𝙣 𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚𝙨 𝙚𝙣 𝙢𝙞 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙖𝙩𝙤𝙨.`, mentions: [user]}, {quoted: m});
};
handler.tags = ['owner'];
handler.command = /(restablecerdatos|deletedatauser|resetuser)$/i;
handler.rowner = true;
export default handler;
