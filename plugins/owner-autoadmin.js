

const handler = async (m, {conn, isAdmin}) => {
  if (m.fromMe) return;
  if (isAdmin) throw '> *❮🤖❯➣ Hola creadora/SubCreador(a), como esta? ahora usted es admin en este grupo.*';
  try {
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'promote');
  } catch {
    await m.reply('> *❮🤖❯➣ Perdoneme creadora/SubCreador(a), no fue posible darte admin...*');
  }
};
handler.command = /^(tenerpoder|autoadmin)$/i;
handler.rowner = true;
handler.group = true;
handler.botAdmin = true;
export default handler;