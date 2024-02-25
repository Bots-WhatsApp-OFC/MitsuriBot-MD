
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) throw `🍓 \`𝐏𝐎𝐓𝐈𝐅𝐘 𝐁𝐎𝐓\` 🍓\n\n> *Hace falta el título de la canción de Spotify.*\n\n> *Ejemplo:* _${usedPrefix + command} Good Feeling - Flo Rida_`;
  try {
    const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  
    let spotifyi = `🌻 𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎𝐒 / 𝐓𝐈𝐓𝐔𝐋𝐎 🌻\n\n`
        spotifyi += ` 𝐍𝐎𝐌𝐁𝐑𝐄: ${spty.title}\n\n`
        spotifyi += ` 𝐀𝐑𝐓𝐈𝐒𝐓𝐀: ${spty.artist}\n\n`
        spotifyi += ` 𝐀𝐋𝐁𝐔𝐌: ${spty.album}\n\n`                 
        spotifyi += ` 𝐏𝐔𝐁𝐋𝐈𝐂𝐀𝐃𝐎: ${spty.year}\n\n`   
        spotifyi += `> 𝑺𝒆 𝒆𝒔𝒕𝒂 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒏𝒅𝒐, 𝒆𝒔𝒑𝒆𝒓𝒆 𝒖𝒏 𝒎𝒊𝒏𝒖𝒕𝒐.`
    await conn.sendMessage(m.chat, {text: spotifyi.trim(), contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": linkDL, "sourceUrl": linkDL}}}, {quoted: m});
    await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
  } catch (error) {
    console.error(error);
    throw '> 🍓 𝑬𝑹𝑹𝑶𝑹 / 𝑭𝑨𝑳𝑳𝑶 🍓\n\n> 𝑶𝑪𝑼𝑹𝑹𝑰𝑶 𝑼𝑵 𝑬𝑹𝑹𝑶𝑹, 𝑷𝑶𝑹 𝑭𝑨𝑽𝑶𝑹, 𝑽𝑼𝑬𝑳𝑽𝑨 𝑨 𝑰𝑵𝑻𝑬𝑵𝑻𝑨𝑹𝑳𝑶.';
  }
};
handler.command = /^(spotify|music)$/i;
export default handler;